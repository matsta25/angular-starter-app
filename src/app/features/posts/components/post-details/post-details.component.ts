import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs'
import { PostsState } from '../../store/posts.state'
import { select, Store } from '@ngrx/store'
import { Post } from '../../models/post.model'
import { selectPostById } from '../../store/posts.selectors'
import { deletePostsItem, readPostsItem } from '../../store/posts.actions'
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  public post$: Observable<Post>

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<PostsState>,
  ) {
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.post$ = this.store.pipe(select(selectPostById(params.id)))
      this.post$.pipe(take(1)).subscribe(post => !post && this.store.dispatch(readPostsItem({id: params.id})))
    })
  }

  public delete(postId) {
    this.store.dispatch(deletePostsItem({id: postId}))
  }
}
