import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { Post } from '../models/post.model'
import { Observable } from 'rxjs'
import { ApiServiceModel } from '../../../shared/models/api-service.model'

@Injectable({
  providedIn: 'root',
})
export class PostsApiService implements ApiServiceModel {
  constructor(private http: HttpClient) {
  }

  public createItem(post: Post): Observable<object> {
    return this.http.post(`${environment.baseUrl}/posts`, post)
  }

  public readItems(): Observable<object> {
    return this.http.get(`${environment.baseUrl}/posts`)
  }

  public readItem(id: string): Observable<object> {
    return this.http.get(`${environment.baseUrl}/posts/${id}`)
  }

  public updateItem(id: string, changes: Partial<Post>): Observable<object> {
    return this.http.put(`${environment.baseUrl}/posts/${id}`, changes)
  }

  public deleteItem(id: string): Observable<object> {
    return this.http.delete(`${environment.baseUrl}/posts/${id}`)
  }
}
