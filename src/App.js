import React, { useEffect, useState } from 'react'
import './App.css';
import Header from 'components/Header';
import ButtonPluss from 'components/Button/ButtonPluss';
import Input from 'components/Input';
import Divider from 'components/Divider';
import List from 'components/List';
import Panigation from 'components/Panigation';
import { defaultValueTask, LIMIT_TASK_IN_PAGE } from 'constants/common';
import { createNewTask, deleteTaskById, getAllTasks, getTaskById, updateTaskById } from 'apis/taskApi';
export default function App() {
  const [inputTaskType, setInputTaskType] = useState('')
  const [listTasks, setListTasks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    handleGetAllTask()
  }, [])

  const handleGetAllTask = async () => {
    try {
      const data = await getAllTasks()
      data && setListTasks(data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeInputTask = (e) => {
    setInputTaskType(e.target.value)
  }

  const handleAddTask = async () => {
    if (!inputTaskType.trim()) {
      setInputTaskType('')
      return
    }

    const newTask = {
      ...defaultValueTask,
      id: new Date().getTime(),
      taskName: inputTaskType,
    }

    try {
      await createNewTask(newTask)
      await handleGetAllTask()
    } catch (error) {
      console.log(error);
    } finally {
      setInputTaskType('')
    }
  }

  const handleDeleteTask = async (id) => {
    try {
      await deleteTaskById(id)
      await handleGetAllTask()
    } catch (error) {
      console.log(error);
    }
  }

  const handleCompleteTask = async (id) => {
    try {
      const taskById = await getTaskById(id)
      await updateTaskById(id, { ...taskById, isCompleted: true })
      await handleGetAllTask()
    } catch (error) {
      console.log(error);
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

