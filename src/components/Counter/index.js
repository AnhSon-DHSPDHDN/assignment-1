import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  handleDecrement() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  render() {
    return (
      <>
        <button onClick={this.handleDecrement}>Giảm</button>
        <div>{this.state.count}</div>
        <button onClick={this.handleIncrement}>Tăng</button>
      </>
    )
  }
}
