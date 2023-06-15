import { Injectable } from '@angular/core';

export interface TodoInterface {
  createdAt: Date;
  id: number;
  taskName: string,
  done: boolean;
  dueDate: Date | null
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  taskList: Array<TodoInterface> = [
    {
      createdAt: new Date(),
      id: 1,
      taskName: 'Faire le café',
      done: false,
      dueDate: null
    },
    {
      createdAt: new Date(),
      id: 2,
      taskName: 'Acheter du lait',
      done: true,
      dueDate: null
    }
  ];

  editedTaskIndex: number | null = null;

  constructor() { }

  addTask(data: any) {
    const newTask: TodoInterface = {
      done: false,
      createdAt: new Date(),
      id: new Date().getTime(),
      taskName: data.taskName,
      dueDate: data.dueDate
    }

    this.taskList.push(newTask);
  }

  updateTask(data: any) {
    const task = this.getTask();
    if ('taskName' in task && 'dueDate' in task) {
      task.taskName = data.taskName;
      task.dueDate = data.dueDate;

      this.editedTaskIndex = null;
    }
  }

  isInUpdateMode() {
    return this.editedTaskIndex !== null;
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1);
  }

  getTask() {
    if (this.editedTaskIndex != null) {
      return this.taskList[this.editedTaskIndex];
    } else {
      return {};
    }
  }



}
