import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { PostsState } from '../../store/posts.state'
import { select, Store } from '@ngrx/store'
import { readPost, updatePost } from '../../store/posts.actions'
import { Post } from '../../models/post.model'
import { selectPostById } from '../../store/posts.selectors'
import { FormBuilder, FormGroup } from '@angular/forms'
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.scss']
})
export class PostUpdateComponent implements OnInit, OnDestroy {

  public postUpdateForm: FormGroup
  private post$: Observable<Post>
  private subscriptions: Subscription = new Subscription()

  constructor(private activatedRoute: ActivatedRoute, private store: Store<PostsState>, private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.post$ = this.store.pipe(select(selectPostById(params.id)))

      this.subscriptions.add(
        this.post$.subscribe(post => {
          if (post) {
            this.patchPostUpdateFormGroup(post)
          } else {
            this.store.dispatch(readPost({id: params.id}))
          }
        })
      )
    })

    this.postUpdateForm = this.createPostUpdateFormGroup()
  }

  private createPostUpdateFormGroup(): FormGroup {
    return this.fb.group({
      id: '',
      title: '',
      body: ''
    })
  }

  private patchPostUpdateFormGroup(post: Post): void {
    this.postUpdateForm.patchValue({
      id: post.id,
      title: post.title,
      body: post.body,
    })
  }

  public onPostUpdateFormSubmit(): void {
    const post: Post = this.postUpdateForm.value
    // this.store.dispatch(updatePost({post}))
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
