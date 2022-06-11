import './App.css';
import Header from 'components/Header';
import ButtonPluss from 'components/Button/ButtonPluss';
import Input from 'components/Input';
import Divider from 'components/Divider';
import List from 'components/List';
import Panigation from 'components/Panigation';
import { defaultValueTask, initialTasks, LIMIT_TASK_IN_PAGE } from 'constants/common';


import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      listTasks: initialTasks,
      inputTaskType: '',
      currentPage: 1
    }
    this.handleChangeInputTask = this.handleChangeInputTask.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleDeleteTask = this.handleDeleteTask.bind(this)
    this.handleCompleteTask = this.handleCompleteTask.bind(this)
    this.getTaskInCurrentPage = this.getTaskInCurrentPage.bind(this)
    this.handleSetCurrentPage = this.handleSetCurrentPage.bind(this)
  }

  handleChangeInputTask(e) {
    this.setState({
      inputTaskType: e.target.value
    })
  }

  handleAddTask() {
    if (!this.state.inputTaskType.trim()) {
      this.setState({
        inputTaskType: ''
      })
      return
    }

    const newTask = {
      ...defaultValueTask,
      id: new Date().getTime(),
      taskName: this.state.inputTaskType,
    }

    this.setState(prevState => {
      return {
        ...prevState,
        listTasks: [newTask, ...prevState.listTasks],
        inputTaskType: ''
      }
    })
  }

  handleDeleteTask(id) {
    const listTasks = [...this.state.listTasks];
    const indexDelete = listTasks.findIndex(task => task.id === id)
    if (indexDelete !== -1) {
      listTasks.splice(indexDelete, 1)
      this.setState({
        listTasks: [...listTasks]
      })
    }
  }

  handleCompleteTask(id) {
    const listTasks = [...this.state.listTasks];
    const indexUpdate = listTasks.findIndex(task => task.id === id)
    if (indexUpdate !== -1) {
      const taskReplace = {
        ...listTasks[indexUpdate],
        isCompleted: true
      }
      listTasks.splice(indexUpdate, 1, taskReplace)
      this.setState({
        listTasks: listTasks
      })
    }
  }

  getTaskInCurrentPage() {
    const startIndex = this.state.currentPage * LIMIT_TASK_IN_PAGE - LIMIT_TASK_IN_PAGE
    return [...this.state.listTasks.slice(startIndex, startIndex + LIMIT_TASK_IN_PAGE)]
  }

  handleSetCurrentPage(page) {
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <div className="App">
        <Header title={'TO DO LIST APPLICATION'} />
        <div className='add-task-wrapper'>
          <Input
            handleChangeInputTask={this.handleChangeInputTask}
            value={this.state.inputTaskType}
          />
          <ButtonPluss onClick={this.handleAddTask} />
        </div>
        <Divider fullWidth />
        <List
          taskLists={this.getTaskInCurrentPage()}
          handleDeleteTask={this.handleDeleteTask}
          handleCompleteTask={this.handleCompleteTask}
        />
        <Divider fullWidth />
        <Panigation
          currentPage={this.state.currentPage}
          taskLists={this.state.listTasks}
          limit={LIMIT_TASK_IN_PAGE}
          handleSetCurrentPage={this.handleSetCurrentPage}
        />
      </div>
    );
  }
}

