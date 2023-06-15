import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { SettingsService } from './settings.service';

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
  private store: Storage

  constructor(private settingsSrv: SettingsService) {
    this.store = new Storage();
    this.store.create();
  }

  async loadData() {
    const data = await this.store.get(this.settingsSrv.settings.storageKey);
    this.taskList = JSON.parse(data) || [];
  }

  async persist() {
    await this.store.set(
      this.settingsSrv.settings.storageKey,
      JSON.stringify(this.taskList)
    );

    this.settingsSrv.setStorageKeyList();
  }

  addTask(data: any) {
    const newTask: TodoInterface = {
      done: false,
      createdAt: new Date(),
      id: new Date().getTime(),
      taskName: data.taskName,
      dueDate: data.dueDate
    }

    this.taskList.push(newTask);
    this.persist();
  }

  updateTask(data: any) {
    const task = this.getTask();
    if ('taskName' in task && 'dueDate' in task) {
      task.taskName = data.taskName;
      task.dueDate = data.dueDate;

      this.editedTaskIndex = null;

      this.persist();
    }
  }

  isInUpdateMode() {
    return this.editedTaskIndex !== null;
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1);
    this.persist();
  }

  getTask() {
    if (this.editedTaskIndex != null) {
      return this.taskList[this.editedTaskIndex];
    } else {
      return {};
    }
  }



}
