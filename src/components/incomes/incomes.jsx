import React, {Component} from 'react';
import Input from 'arui-feather/input';
import IconCurrencyRub from 'arui-feather/icon/currency/currency-rub';
import Button from 'arui-feather/button';


class Incomes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            transation: '',
            category: ''
        };
    }



    render() {
        return (
            <div className="row-flex">
                <div className="col">
                    <Input
                        label='Доходы'
                        placeholder='Внесите доходы'
                        view='line'
                        type='number'
                        value={this.state.transation}
                        onChange={this.handleTransationChange}
                        icon={
                            <IconCurrencyRub size={'s'}/>
                        }
                    />
                </div>

                <div className="col">
                    <Input
                        label='Категория'
                        placeholder='Внесите категорию'
                        value={this.state.category}
                        onChange={this.handleCategoryChange}
                        view='line'
                    />
                </div>

                <div className="col">
                    <Button
                        view='extra'
                        onClick={this.handleClick}>
                        Добавить
                    </Button>
                </div>

            </div>

        )
    }

    handleTransationChange = (number) => {
        this.setState({
            transation: number
        })
    };

    handleCategoryChange = (category) => {
        this.setState({
            category: category
        })
    };

    handleClick = () => {

        const { transation, category} = this.state;
        this.props.onSubmit((Math.abs(parseFloat(transation))), category);

        console.log('###: handleClick ');
        console.log('###: this.state ', this.state );

        this.setState({
            transation: '',
            category: ''
        });


    }
}

export default Incomes;