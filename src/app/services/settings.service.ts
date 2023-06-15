import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings = {
    colors: {
      pendingTask: 'secondary',
      doneTask: 'medium'
    }
  }

  colorNamesList = [
    'primary', 'secondary', 'danger', 'warning', 'light', 'medium', 'dark',
    'tertiary', 'success'
  ];

  constructor() { }
}
