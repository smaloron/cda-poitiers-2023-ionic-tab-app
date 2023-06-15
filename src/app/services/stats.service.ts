import { Injectable } from '@angular/core';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private todoSrv: TodoService) { }


  getTaskCount() {
    return this.todoSrv.taskList.length;
  }

  getPendingTaskCount() {
    return this.todoSrv.taskList.filter((item) => item.done === false).length;
  }

  getDoneTaskCount() {
    return this.todoSrv.taskList.filter((item) => item.done).length;
  }

  getOverdueTaskCount() {
    const now = new Date();
    return this.todoSrv.taskList.filter((item) => {
      return !item.done && item.dueDate && new Date(item.dueDate) < now
    }).length;
  }
}
