import React, { Component } from 'react'

export default class Panigation extends Component {
  render() {
    return (
      <div className='panigation-wrapper'>
        <button>{'<'}</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>{'>'}</button>
      </div>
    )
  }
}
