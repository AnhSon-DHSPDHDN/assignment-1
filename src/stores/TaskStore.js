import { defaultValueTask, LIMIT_TASK_IN_PAGE } from 'constants/common';
import { types } from 'mobx-state-tree'
import React from 'react';

const TaskType = types.model({
  id: types.number,
  taskName: types.string,
  isCompleted: types.boolean
})

const TaskStore = types.model({
  inputTaskType: types.string,
  listTasks: types.array(TaskType),
  currentPage: types.number
}).actions(self => {
  return {
    handleDeleteTask(id) {
      const listTasksClone = [...self.listTasks];
      const indexDelete = listTasksClone.findIndex(task => task.id === id)
      if (indexDelete !== -1) {
        listTasksClone.splice(indexDelete, 1)
        self.listTasks = [...listTasksClone]
      }
    },
    handleChangeInputTask(e) {
      self.inputTaskType = e.target.value
    },
    handleAddTask() {
      if (!self.inputTaskType.trim()) {
        self.inputTaskType = ''
        return
      }

      const newTask = {
        ...defaultValueTask,
        id: new Date().getTime(),
        taskName: self.inputTaskType,
      }

      self.listTasks = [newTask, ...self.listTasks]
      self.inputTaskType = ''
    },
    handleCompleteTask(id) {
      const listTasksClone = [...self.listTasks];
      const indexUpdate = listTasksClone.findIndex(task => task.id === id)
      if (indexUpdate !== -1) {
        const taskReplace = {
          ...listTasksClone[indexUpdate],
          isCompleted: true
        }
        listTasksClone.splice(indexUpdate, 1, taskReplace)
        self.listTasks = [...listTasksClone]
      }
    },
    handleSetCurrentPage(page) {
      self.currentPage = page
    }
  }
}).views(self => {
  return {
    getTaskInCurrentPage() {
      const startIndex = self.currentPage * LIMIT_TASK_IN_PAGE - LIMIT_TASK_IN_PAGE
      return [...self.listTasks.slice(startIndex, startIndex + LIMIT_TASK_IN_PAGE)]
    }
  }
})

export const taskStore = TaskStore.create({
  currentPage: 1,
  listTasks: [],
  inputTaskType: ''
})

export const TaskStoreContext = React.createContext(taskStore)