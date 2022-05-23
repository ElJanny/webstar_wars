import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public get(key: string): string | null{
    return localStorage.getItem(key);
  }

  public set(key: string, value: string): void{
    localStorage.setItem(key, value)
  }

  public remove(...keys: string[]): void{
    keys.forEach(element => {
      localStorage.removeItem(element);
    });
  }
}
