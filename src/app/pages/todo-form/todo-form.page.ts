import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { NavigationBehaviorOptions, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.page.html',
  styleUrls: ['./todo-form.page.scss'],
})
export class TodoFormPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(todoForm: NgForm) {
    //console.log(todoForm.form.value);
    if (todoForm.status === 'VALID') {
      const params: NavigationBehaviorOptions = {
        state: {
          taskName: todoForm.form.value.taskName,
          dueDate: todoForm.form.value.dueDate
        }
      }
      //this.router.navigate(['tabs', 'todo-list']);
      this.router.navigateByUrl('/tabs/todo-list');
    }
  }
}
