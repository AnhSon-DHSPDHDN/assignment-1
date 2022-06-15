import React, { Component } from 'react'
import { CommonContext } from '../contexts';

export default class Layout4 extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        {this.context.helloWorld}
        <button
          style={{ marginLeft: '30px' }}
          onClick={this.context.handleChangeText}
        >
          Change Context!!
        </button>
      </div>
    )
  }
}

Layout4.contextType = CommonContext
