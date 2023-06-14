import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoInterface, TodoService } from 'src/app/services/todo.service';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {


  constructor(public todoService: TodoService, private router: Router) {

  }

  ngOnInit() {
  }

  getTaskColor(task: TodoInterface) {
    if (task.done)
      return 'warning';

    return 'success';
  }

  edit(pos: number) {
    this.todoService.editedTaskIndex = pos;
    this.router.navigate(['todo-form']);
  }

}
