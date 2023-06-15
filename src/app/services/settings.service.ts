import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { TodoService } from './todo.service';

const STORAGE_KEY = 'todoSettings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  defaultSettings = {
    colors: {
      pendingTask: 'secondary',
      doneTask: 'medium',
    },
    storageKey: 'taskList'
  }

  settings = {
    colors: {
      pendingTask: 'secondary',
      doneTask: 'medium',
    },
    storageKey: 'taskList'
  };

  colorNamesList = [
    'primary', 'secondary', 'danger', 'warning', 'light', 'medium', 'dark',
    'tertiary', 'success'
  ];

  storageKeyList: string[] = [];

  private store: Storage;

  constructor() {
    this.store = new Storage();
    this.store.create();
    this.settings = this.defaultSettings;

    this.loadSettings();

    //this.setStorageKeyList();
  }

  async loadSettings() {
    const data = await this.store.get(STORAGE_KEY);
    this.settings = JSON.parse(data) || this.defaultSettings;
  }

  persist() {
    this.store.set(STORAGE_KEY, JSON.stringify(this.settings));
  }

  async setStorageKeyList() {
    let list: string[] = await this.store.keys() || [];
    list = list.filter((item) => item !== STORAGE_KEY);
    this.storageKeyList = list;
  }
}
