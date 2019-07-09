import React, {Component} from 'react';
import './App.css';
import moment from 'moment';

import CalendarInput from 'arui-feather/calendar-input';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      date: moment()
    }
  }



  render() {
    const {date} = this.state;
    return (
        <div className="App">

          <h1>Реактивный бюджет</h1>

          <p>
            {this.state.date.format('DD-MM-YYYY')}
            <CalendarInput
              value={ date.format('DD-MM-YYYY')}
            />
          </p>

        </div>
    );
  }

}


export default App;
