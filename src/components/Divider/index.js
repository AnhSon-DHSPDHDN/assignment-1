import React, { Component } from 'react'

export default class Divider extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { fullWidth } = this.props

    return (
      <hr style={{ height: '2px', color: 'black', backgroundColor: 'black', width: fullWidth ? '100%' : '90%' }} />
    )
  }
}
