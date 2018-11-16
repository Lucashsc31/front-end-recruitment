import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
