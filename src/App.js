import React, { useState } from 'react'
import './App.css';
import Header from 'components/Header';
import ButtonPluss from 'components/Button/ButtonPluss';
import Input from 'components/Input';
import Divider from 'components/Divider';
import List from 'components/List';
import Panigation from 'components/Panigation';
import { defaultValueTask, initialTasks, LIMIT_TASK_IN_PAGE } from 'constants/common';
// import useMagicNum from 'hooks/useMagicNum';

export default function App() {
  const [inputTaskType, setInputTaskType] = useState('')
  const [listTasks, setListTasks] = useState(initialTasks)
  const [currentPage, setCurrentPage] = useState(1)
  // const magicNum = useMagicNum()

  const handleChangeInputTask = (e) => {
    setInputTaskType(e.target.value)
  }

  const handleAddTask = () => {
    if (!inputTaskType.trim()) {
      setInputTaskType('')
      return
    }

    const newTask = {
      ...defaultValueTask,
      id: new Date().getTime(),
      taskName: inputTaskType,
    }

    setListTasks([newTask, ...listTasks])
    setInputTaskType('')
  }

  const handleDeleteTask = (id) => {
    const listTasksClone = [...listTasks];
    const indexDelete = listTasksClone.findIndex(task => task.id === id)
    if (indexDelete !== -1) {
      listTasksClone.splice(indexDelete, 1)
      setListTasks([...listTasksClone])
    }
  }

  const handleCompleteTask = (id) => {
    const listTasksClone = [...listTasks];
    const indexUpdate = listTasksClone.findIndex(task => task.id === id)
    if (indexUpdate !== -1) {
      const taskReplace = {
        ...listTasksClone[indexUpdate],
        isCompleted: true
      }
      listTasksClone.splice(indexUpdate, 1, taskReplace)
      setListTasks([...listTasksClone])
    }
  }

  const getTaskInCurrentPage = () => {
    const startIndex = currentPage * LIMIT_TASK_IN_PAGE - LIMIT_TASK_IN_PAGE
    return [...listTasks.slice(startIndex, startIndex + LIMIT_TASK_IN_PAGE)]
  }

  const handleSetCurrentPage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="App">
      <Header title={'TO DO LIST APPLICATION'} />
      <div className='add-task-wrapper'>
        <Input
          handleChangeInputTask={handleChangeInputTask}
          value={inputTaskType}
        />
        <ButtonPluss onClick={handleAddTask} />
      </div>
      <Divider fullWidth />
      <List
        taskLists={getTaskInCurrentPage()}
        handleDeleteTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
      />
      <Divider fullWidth />
      <Panigation
        currentPage={currentPage}
        taskLists={listTasks}
        limit={LIMIT_TASK_IN_PAGE}
        handleSetCurrentPage={handleSetCurrentPage}
      />
    </div>
  );
}

