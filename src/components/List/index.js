import React, { useContext } from 'react';
import { observer } from 'mobx-react'
import ListItem from './ListItem'
import { TaskStoreContext } from 'stores/TaskStore';

const List = () => {
  const TaskStore = useContext(TaskStoreContext)
  const { getTaskInCurrentPage, handleDeleteTask, handleCompleteTask } = TaskStore
  return (
    <div className='list-wrapper'>
      {getTaskInCurrentPage()?.map(taskItem => (
        <ListItem
          key={taskItem.id}
          task={taskItem}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
        />
      ))}
    </div>
  )
}

export default observer(List)