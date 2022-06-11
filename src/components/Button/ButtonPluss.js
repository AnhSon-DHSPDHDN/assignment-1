import React, { Component } from 'react'
import './style.css'

export default class ButtonPluss extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <button
        className='btn btn--pluss'
        style={{ fontSize: 40 }}
        onClick={this.props.onClick}
      >+</button>
    )
  }
}
