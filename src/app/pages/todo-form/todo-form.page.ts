import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { NavigationBehaviorOptions, NavigationExtras, Router } from '@angular/router';
import { TodoInterface, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.page.html',
  styleUrls: ['./todo-form.page.scss'],
})
export class TodoFormPage implements OnInit {

  @ViewChild('todoForm') form: NgForm | undefined;

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log("init")

    if (this.todoService.editedTaskIndex !== null) {
      const task: any = this.todoService.getTask();
      console.log(this.form);

      setTimeout(() => {
        this.form?.setValue({
          taskName: task.taskName,
          dueDate: task.dueDate
        }), 500
      });

    }
  }

  onSubmit(todoForm: NgForm) {
    //console.log(todoForm.form.value);
    if (todoForm.status === 'VALID') {
      if (this.todoService.isInUpdateMode()) {
        this.todoService.updateTask(todoForm.form.value);
      } else {
        this.todoService.addTask(todoForm.form.value);
      }

      //this.router.navigate(['tabs', 'todo-list']);
      this.router.navigateByUrl('/tabs/todo-list');
    }
  }
}
