import ButtonSpecial from 'components/Button/ButtonSpecial'
import Divider from 'components/Divider'
import React, { Component } from 'react'
import ListContent from './ListContent'
import './style.css'

export default class ListItem extends Component {
  render() {
    return (
      <>
        <div className='list-item'>
          <div>
            <ListContent content="This is a first task!" />
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
