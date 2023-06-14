import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface TodoInterface {
  createdAt: Date;
  id: number;
  taskName: string,
  done: boolean;
  dueDate: Date | null
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

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

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.taskList);
  }

  ngOnInit() {

    // Abonnement au données provenant du formulaire
    this.activatedRoute.queryParams.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  getTaskColor(task: TodoInterface) {
    if (task.done)
      return 'warning';

    return 'success';
  }

}
