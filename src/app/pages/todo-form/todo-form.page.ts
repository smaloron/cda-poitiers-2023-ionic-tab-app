import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { NavigationBehaviorOptions, NavigationExtras, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.page.html',
  styleUrls: ['./todo-form.page.scss'],
})
export class TodoFormPage implements OnInit {

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit() {
  }

  onSubmit(todoForm: NgForm) {
    //console.log(todoForm.form.value);
    if (todoForm.status === 'VALID') {
      this.todoService.addTask(todoForm.form.value);
      //this.router.navigate(['tabs', 'todo-list']);
      this.router.navigateByUrl('/tabs/todo-list');
    }
  }
}
