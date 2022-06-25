import React, { useContext } from 'react'
import { TaskStoreContext } from 'stores/TaskStore'
import './style.css'

const ButtonPluss = () => {
  const TaskStore = useContext(TaskStoreContext)
  const { handleAddTask } = TaskStore

  return (
    <button
      className='btn btn--pluss'
      style={{ fontSize: 40 }}
      onClick={handleAddTask}
    >+</button>
  )
}

export default ButtonPluss