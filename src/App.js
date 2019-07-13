import React, {Component} from 'react';
import './App.css';

import CalendarInput from 'arui-feather/calendar-input';
import Button from 'arui-feather/button';
import IconBuy from 'arui-feather/icon/ui/buy';
import IconSell from 'arui-feather/icon/ui/sell';

import Tabs from 'arui-feather/tabs';
import TabItem from 'arui-feather/tab-item';

import moment from 'moment';

import Expanse from './components/expanse/expanse';
import Incomes from './components/incomes/incomes';

import sortBy from 'lodash/sortBy';
import Amount from 'arui-feather/amount';


class App extends Component {

  constructor(props){
    super(props);

    let storageState = localStorage.getItem('state');
    let initState;

    if(storageState !== null){
        storageState = JSON.parse(storageState);
        initState = { ... storageState, date: moment(storageState.date)}
    } else {
        initState = {
            date: moment(),
            tabSelected: 'expanse',
            transactions: []
        }
    }

    this.state = initState;


  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      const {date} = this.state;

      localStorage.setItem('state', JSON.stringify({... this.state, date: date.format() }));
      console.log('###: localStorage: ', localStorage);
  }


    render() {
    const {date, tabSelected, transactions} = this.state;
    return (
        <div className="App">
            <h1>Реактивный бюджет</h1>

            <div className={'row'}>
              <p>
                <CalendarInput
                  value={ date.format('DD.MM.YYYY')}
                  onChange={this.handleCalendarChange}
                />
              </p>
            </div>

            <div className={'row'}>

                <Button size={'s'} view='action' onClick={this.handleSubstractDay}>
                    <IconSell/>
                </Button>

                <Button size={'s'} view='action' onClick={this.handleAddDay}>
                    <IconBuy/>
                </Button>

            </div>

            <div className="row">

                <Tabs>
                    <TabItem onClick={ this.handleTabSelectedClick } checked={ tabSelected === 'expanse' } id='expanse'>
                        Расходы
                    </TabItem>
                    <TabItem onClick={ this.handleTabSelectedClick } checked={ tabSelected === 'incomes' } id='incomes'>
                        Доходы
                    </TabItem>
                </Tabs>

            </div>

            <div className="row">
                {
                    tabSelected === 'expanse' ? (
                        <Expanse onSubmit={this.handleSubmitTransaction}/>
                    ) : (
                        <Incomes onSubmit={this.handleSubmitTransaction}/>
                    )
                }
            </div>


            <div className="row">
                На сегодня: {this.renderAmount(this.onToday())}
            </div>
            <div className="row">

                <table>
                    <thead>
                        <td>Дата:</td>
                        <td>Сумма:</td>
                        <td>Категория:</td>
                    </thead>
                    <tbody>
                    {
                        transactions.filter(
                            ({date: transactionDate}) => moment(transactionDate, 'DD.MM.YYYY').isSame(date, 'month')
                        )
                        .map(
                            (item, index) => (
                                <tr key={index}>
                                    <td>
                                        {item.date}
                                    </td>
                                    <td>
                                        Сумма: {this.renderAmount(item.sum)}
                                    </td>
                                    <td>
                                        Категория: {item.category}
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>

            </div>

        </div>
    );
  }

  renderAmount(sum) {

      const AMOUNT = {
          value: sum,
          currency: {
              code: 'RUR',
              minority: 1
          }
      };

      return (
          <Amount amount={AMOUNT}></Amount>
      );
  }

  onToday = () => {
      const { transactions, date} = this.state;

      const currentMonthTransaction = transactions.filter(
          ({date: transactionDate}) => moment(transactionDate, 'DD.MM.YYYY').isSame(date, 'month')
      );

      console.log('### currentMonthTransaction: ', currentMonthTransaction);

      const dailyMoney = currentMonthTransaction.reduce(
          (acc, transaction) => transaction.sum > 0 ? transaction.sum + acc: acc, 0
      );

      const dailyExpanse = currentMonthTransaction.reduce(
          (acc, transaction) => transaction.sum < 0 ? transaction.sum + acc: acc, 0
      );

      const newDailyExpanse = dailyMoney - Math.abs(dailyExpanse);

      console.log('###dailyExpanse: ', dailyExpanse);


      console.log('##dailyMoney: ', dailyMoney);
      console.log('##newDailyExpanse: ', newDailyExpanse);
      return dailyMoney / moment(date).daysInMonth();
  };

  // обработка даты
  handleCalendarChange = (date) => {
    const newDate = date.split('.');
      this.setState({
        date: moment(`${newDate[2]}-${newDate[1]}-${newDate[0]}`)
    });
  };

  // кнопка уменьшения дня
  handleSubstractDay = () => {
    this.setState({
        date: this.state.date.subtract(1, 'day')
    });
  };

  // кнопка увеличения дня
  handleAddDay = () => {
    this.setState({
        date: this.state.date.add(1, 'day')
    });
  };

  handleTabSelectedClick = (event) => {
    console.log('####: handleTabSelectedClick ');

    this.setState({
        tabSelected: event.target.getAttribute('id')
    });
  };

  handleSubmitTransaction = (sum, category) => {
      console.log('### sum ', sum);
      console.log('### category ', category);

      const {date: TodayDate, transactions = []} = this.state;
      const newTransaction = {
          date: TodayDate.format('DD-MM-YYYY'),
          category,
          sum
      };

      const newTransactions = [... transactions];
      newTransactions.push(newTransaction);

      this.setState({
          transactions: sortBy(newTransactions, ['date'])
      });

      console.log(this.state.transactions);
  }
}


export default App;
