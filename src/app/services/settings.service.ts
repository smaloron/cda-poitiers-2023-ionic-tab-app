import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = 'todoSettings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  defaultSettings = {
    colors: {
      pendingTask: 'secondary',
      doneTask: 'medium'
    }
  }

  settings = {
    colors: {
      pendingTask: 'secondary',
      doneTask: 'medium'
    }
  };

  colorNamesList = [
    'primary', 'secondary', 'danger', 'warning', 'light', 'medium', 'dark',
    'tertiary', 'success'
  ];

  private store: Storage;

  constructor() {
    this.store = new Storage();
    this.store.create();
    this.settings = this.defaultSettings;

    this.loadSettings();
  }

  async loadSettings() {
    const data = await this.store.get(STORAGE_KEY);
    this.settings = JSON.parse(data) || this.defaultSettings;
  }

  persist() {
    this.store.set(STORAGE_KEY, JSON.stringify(this.settings));
  }
}
