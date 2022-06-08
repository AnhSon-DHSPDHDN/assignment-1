import ButtonSpecial from 'components/Button/ButtonSpecial'
import Divider from 'components/Divider'
import React, { Component } from 'react'
import ListContent from './ListContent'
import './style.css'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { task } = this.props
    return (
      <>
        <div className='list-item'>
          <div>
            <ListContent content={task.taskName} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <ButtonSpecial completed />
            <ButtonSpecial remove />
          </div>
        </div>
        <Divider fullWidth />
      </>
    )
  }
}
