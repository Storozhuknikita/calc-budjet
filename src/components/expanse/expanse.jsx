import React, {Component} from 'react';
import Input from 'arui-feather/input';
import IconCurrencyRub from 'arui-feather/icon/currency/currency-rub';

class Expanse extends Component {

    render() {
        return (
            <div>
                <div className="col">
                    <Input
                        label='Расходы'
                        placeholder='Внесите расходы'
                        view='line'
                        type='number'
                        icon={
                            <IconCurrencyRub size={'s'}/>
                        }
                    />
                </div>

                <div className="col">
                    <Input
                        label='Категория'
                        placeholder='Внесите категорию'
                        view='line'
                    />
                </div>
            </div>

        )
    }
}

export default Expanse;