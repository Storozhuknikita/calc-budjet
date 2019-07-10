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


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        date: moment(),
        tabSelected: 'expanse'
    }
  }



  render() {
    const {date, tabSelected} = this.state;
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
                    tabSelected == 'expanse' ? (
                        <Expanse/>
                    ) : (
                        <Incomes/>
                    )
                }
            </div>

        </div>
    );
  }

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
  }

}


export default App;
