import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { Post } from '../models/post.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  public createPost(post: Post): Observable<object> {
    return this.http.post(`${environment.baseUrl}/posts`, post)
  }

  public readPosts(): Observable<object> {
    return this.http.get(`${environment.baseUrl}/posts`)
  }

  public readPost(id: string): Observable<object> {
    return this.http.get(`${environment.baseUrl}/posts/${id}`)
  }

  public updatePost(post: Post): Observable<object> {
    return this.http.put(`${environment.baseUrl}/posts/${post.id}`, post)
  }

  public deletePost(id: string): Observable<object> {
    return this.http.delete(`${environment.baseUrl}/posts/${id}`)
  }
}
