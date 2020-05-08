import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Post } from '../../models/post.model'
import { select, Store } from '@ngrx/store'
import { PostsState } from '../../store/posts.state'
import { readPosts } from '../../store/posts.actions'
import { selectPosts } from '../../store/posts.selectors'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent {
  public posts$: Observable<Post[]>

  constructor(private store: Store<PostsState>) {
    store.dispatch(readPosts())
    this.posts$ = this.store.pipe(select(selectPosts))
  }

  public onRefresh(): void {
    this.store.dispatch(readPosts())
  }
}
