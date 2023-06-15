import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from 'src/app/services/settings.service';
import { TodoInterface, TodoService } from 'src/app/services/todo.service';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {


  constructor(
    public todoService: TodoService,
    private router: Router,
    private settingsSrv: SettingsService) {

  }

  ngOnInit() {
    this.todoService.loadData();
  }

  ionViewDidEnter() {
    console.log(this.settingsSrv.settings);
    this.todoService.loadData();
  }

  getTaskColor(task: TodoInterface) {
    if (task.done)
      return this.settingsSrv.settings.colors.doneTask;

    return this.settingsSrv.settings.colors.pendingTask;
  }

  edit(pos: number) {
    this.todoService.editedTaskIndex = pos;
    this.router.navigate(['todo-form']);
  }

}
