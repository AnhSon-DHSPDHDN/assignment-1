import React, { Component } from 'react'
import './style.css'

export default class Input extends Component {
  render() {
    return (
      <input className='input input--task' placeholder='Add new task in here'></input>
    )
  }
}
