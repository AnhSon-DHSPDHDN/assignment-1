import React, { Component } from 'react'
import './style.css'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <input
        className='input input--task'
        placeholder='Add new task in here'
        value={this.props.value}
        onChange={this.props.handleChangeInputTask}
      />
    )
  }
}
