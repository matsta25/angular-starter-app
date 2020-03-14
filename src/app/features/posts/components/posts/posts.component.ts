import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { PostsState } from '../../store/posts.state'
import { Observable } from 'rxjs'
import { Post } from '../../models/post.model'
import { selectPosts } from '../../store/posts.selectors'
import { readPosts } from '../../store/posts.actions'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>

  constructor(private store: Store<PostsState>) {
    this.store.dispatch(readPosts())
  }

  ngOnInit(): void {
    this.posts$ = this.store.pipe(select(selectPosts))
  }

}
