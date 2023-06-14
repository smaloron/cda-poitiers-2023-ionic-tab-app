import { Component, OnInit } from '@angular/core';
import { TodoInterface, TodoService } from 'src/app/services/todo.service';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {


  constructor(public todoService: TodoService) {

  }

  ngOnInit() {
  }

  getTaskColor(task: TodoInterface) {
    if (task.done)
      return 'warning';

    return 'success';
  }

}
