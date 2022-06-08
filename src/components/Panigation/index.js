import React, { Component } from 'react'
import './style.css'

export default class Panigation extends Component {
  render() {
    return (
      <div className='panigation-wrapper'>
        <button className='btn'>{'<'}</button>
        <button className='btn btn--active'>1</button>
        <button className='btn'>2</button>
        <button className='btn'>3</button>
        <button className='btn'>{'>'}</button>
      </div>
    )
  }
}
