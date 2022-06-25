import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import './style.css'
import { TaskStoreContext } from 'stores/TaskStore'

const Input = () => {
  const TaskStore = useContext(TaskStoreContext)
  const { inputTaskType, handleChangeInputTask } = TaskStore
  return (
    <input
      className='input input--task'
      placeholder='Add new task in here'
      value={inputTaskType}
      onChange={handleChangeInputTask}
    />
  )
}

export default observer(Input)
