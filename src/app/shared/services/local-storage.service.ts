import { Injectable } from '@angular/core'
import { LocalStorageKey } from '../models/local-storage-key.model'


@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  // IMPORTANT: do not store sensitive data in local storage,
  // to store data like JWT token use cookies instead!

  public set(key: LocalStorageKey, data: any): void {
    localStorage.setItem(key, JSON.stringify(data))
  }

  public get(key: string): string {
    return JSON.parse(localStorage.getItem(key))
  }

  public del(key: string): void {
    localStorage.removeItem(key)
  }
}
