import './App.css';
import Header from 'components/Header';
import ButtonPluss from 'components/Button/ButtonPluss';
import Input from 'components/Input';
import Divider from 'components/Divider';
import List from 'components/List';
import Panigation from 'components/Panigation';
import { defaultValueTask, initialTasks } from 'constants/common';

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      listTasks: initialTasks,
      inputTaskType: '',
    }
    this.handleChangeInputTask = this.handleChangeInputTask.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleChangeInputTask(e) {
    this.setState({
      inputTaskType: e.target.value
    })
  }

  handleAddTask() {
    if (!this.state.inputTaskType) return

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
        <List taskLists={this.state.listTasks} />
        <Divider fullWidth />
        <Panigation />
      </div>
    );
  }
}

