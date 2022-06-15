import React from 'react';
import './App.css';
import Layout1 from './compontents/Layout1';
import { CommonContext } from './contexts';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      helloWorld: 'helloWorld'
    }
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText() {
    this.setState({
      helloWorld: 'hello Viet Nam ' + Math.random(20)
    })
  }

  render() {
    return (
      <CommonContext.Provider value={{ ...this.state, handleChangeText: this.handleChangeText }}>
        <Layout1 />
      </CommonContext.Provider >
    );
  }
}

export default App;
