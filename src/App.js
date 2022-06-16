import React from 'react';
import './App.css';
import CounterTime from './components/CounterTime';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isCouterShow: true
    }
    this.handleHideCounter = this.handleHideCounter.bind(this)
  }

  handleHideCounter() {
    this.setState(prevState => {
      return {
        isCouterShow: !prevState.isCouterShow
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isCouterShow && <CounterTime />}
        <button onClick={this.handleHideCounter}>{this.state.isCouterShow ? 'Hide Counter' : 'Show Counter'}</button>
      </div>
    );
  }
}

export default App;
