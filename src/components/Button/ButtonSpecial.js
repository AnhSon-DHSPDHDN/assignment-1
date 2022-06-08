import React, { Component } from 'react'

export default class ButtonSpecial extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { completed, remove } = this.props

    if (completed) {
      return <button className='btn btn--completed'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
        </svg>
      </button>
    }

    if (remove) {
      return <button className='btn btn--remove'>X</button>
    }

    return null
  }
}
