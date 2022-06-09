import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeInput(e) {
    const { name, value } = e.target
    // console.log(name, value);
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={this.handleSubmit}>
          <input
            name='username'
            placeholder='Tài khoản'
            onChange={this.handleChangeInput}>
          </input>
          <input
            name='password'
            type={'password'}
            onChange={this.handleChangeInput}
            placeholder="Password">
          </input>
          <button type='submit'>Đăng nhập</button>
        </form>
      </div>
    )
  }
}
