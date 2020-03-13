import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  public readPosts() {
    // TODO: add eviroments and mock below
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

}
