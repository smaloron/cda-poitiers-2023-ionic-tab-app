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

  constructor() { }
}
