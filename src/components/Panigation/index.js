import { LIMIT_TASK_IN_PAGE } from 'constants/common'
import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import { TaskStoreContext } from 'stores/TaskStore'
import './style.css'

const Panigation = () => {
  const TaskStore = useContext(TaskStoreContext)
  const { currentPage, listTasks, handleSetCurrentPage } = TaskStore
  const endPage = listTasks.length / LIMIT_TASK_IN_PAGE

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

export default observer(Panigation)
