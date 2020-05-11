import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { Post } from '../models/post.model'
import { Observable } from 'rxjs'
import { ApiServiceModel } from '../../../shared/models/api-service.model'

const POSTS_API_ENDPOINT = '/posts'

@Injectable({
  providedIn: 'root',
})
export class PostsApiService implements ApiServiceModel<Post> {
  constructor(private http: HttpClient) {
  }

  public createItem(post: Post): Observable<object> {
    return this.http.post(`${environment.baseUrl}${POSTS_API_ENDPOINT}`, post)
  }

  public readItems(): Observable<object> {
    return this.http.get(`${environment.baseUrl}${POSTS_API_ENDPOINT}`)
  }

  public readItem(id: string): Observable<object> {
    return this.http.get(`${environment.baseUrl}${POSTS_API_ENDPOINT}/${id}`)
  }

  public updateItem(id: string, changes: Partial<Post>): Observable<object> {
    return this.http.put(`${environment.baseUrl}${POSTS_API_ENDPOINT}/${id}`, changes)
  }

  public deleteItem(id: string): Observable<object> {
    return this.http.delete(`${environment.baseUrl}${POSTS_API_ENDPOINT}/${id}`)
  }
}
