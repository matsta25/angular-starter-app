import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { Todo } from '../models/todo'
import { ApiServiceModel } from '../../../shared/models/api-service.model'
import { Observable } from 'rxjs'

const TODOS_API_ENDPOINT = '/todos'

@Injectable({
  providedIn: 'root',
})
export class TodosApiService implements ApiServiceModel<Todo> {
  constructor(private http: HttpClient) {
  }

  public createItem(todo: Todo): Observable<object> {
    return this.http.post(`${environment.baseUrl}${TODOS_API_ENDPOINT}`, todo)
  }

  public readItems(): Observable<object> {
    return this.http.get(`${environment.baseUrl}${TODOS_API_ENDPOINT}`)
  }

  public updateItem(id: string, changes: Partial<Todo>): Observable<object> {
    return this.http.put(`${environment.baseUrl}${TODOS_API_ENDPOINT}/${id}`, changes)
  }

  public deleteItem(id: string): Observable<object> {
    return this.http.delete(`${environment.baseUrl}${TODOS_API_ENDPOINT}/${id}`)
  }
}
