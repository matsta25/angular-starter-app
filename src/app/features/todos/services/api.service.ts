import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { Todo } from '../todo'

const TODOS_API_ENDPOINT = '/todos'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  public addItem(todo: Todo) {
    return this.http.post(`${environment.baseUrl}${TODOS_API_ENDPOINT}`, todo)
  }

  public fetchAll() {
    return this.http.get(`${environment.baseUrl}${TODOS_API_ENDPOINT}`)
  }

  public updateItem(id: string, changes: Partial<Todo>) {
    return this.http.put(`${environment.baseUrl}${TODOS_API_ENDPOINT}/${id}`, changes)
  }

  public daleteItem(id: string) {
    return this.http.delete(`${environment.baseUrl}${TODOS_API_ENDPOINT}/${id}`)
  }
}
