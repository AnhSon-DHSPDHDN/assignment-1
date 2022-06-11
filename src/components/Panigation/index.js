import React, { Component } from 'react'
import './style.css'

export default class Panigation extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { currentPage, limit, taskLists, handleSetCurrentPage } = this.props
    const endPage = taskLists.length / limit
    return (
      <div className='panigation-wrapper'>
        {currentPage !== 1 && <button className='btn' onClick={() => handleSetCurrentPage(currentPage - 1)}>{'<'}</button>}
        {currentPage - 1 > 0 && <button className='btn' onClick={() => handleSetCurrentPage(currentPage - 1)}>{currentPage - 1}</button>}
        <button className='btn btn--active'>{currentPage}</button>
        {currentPage < endPage && <button className='btn' onClick={() => handleSetCurrentPage(currentPage + 1)}>{currentPage + 1}</button>}
        {currentPage < endPage && <button className='btn' onClick={() => handleSetCurrentPage(currentPage + 1)}>{'>'}</button>}
      </div >
    )
  }
}
