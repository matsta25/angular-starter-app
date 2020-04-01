import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { Post } from '../models/post.model'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  public createPost(post: Post) {
    return this.http.post(`${environment.baseUrl}/posts`, post)
  }

  public readPosts() {
    return this.http.get(`${environment.baseUrl}/posts`)
  }
}
