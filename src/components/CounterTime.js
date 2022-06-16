import React, { Component } from 'react'

export default class CounterTime extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.timerIdRef = React.createRef(null)
  }

  componentDidMount() {
    this.timerIdRef.current = setInterval(() => {
      console.log('hihihi');
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentDidUpdate(_, prevState) {
    if (prevState.count === 10) {
      this.setState({
        count: 0
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerIdRef.current)
  }

  render() {
    return (
      <div>{this.state.count}</div>
    )
  }
}
