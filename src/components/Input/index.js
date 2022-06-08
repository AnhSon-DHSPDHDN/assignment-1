import React, { Component } from 'react'
import './style.css'

export default class Input extends Component {
  constructor() {
    super()
    this.handleChangeInputTask = this.handleChangeInputTask.bind(this)
  }

  handleChangeInputTask(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <input
        className='input input--task'
        placeholder='Add new task in here' onChange={this.handleChangeInputTask}>
      </input>
    )
  }
}
