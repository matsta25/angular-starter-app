import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable, Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { FormComponentModel } from '../../../../shared/models/form-component.model'
import { PostsState } from '../../store/posts.state'
import { deletePostsItem, readPostsItem, updatePostsItem } from '../../store/posts.actions'
import { Post } from '../../models/post.model'
import { selectPostById } from '../../store/posts.selectors'
import { NotificationBarService } from '../../../../shared/services/notification-bar.service'


@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.scss'],
})
export class PostUpdateComponent implements FormComponentModel, OnInit, OnDestroy {
  public form: FormGroup
  public post$: Observable<Post>
  private subscriptions: Subscription = new Subscription()

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<PostsState>,
    private notification: NotificationBarService,
  ) {
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.post$ = this.store.pipe(select(selectPostById(params.id)))

      this.subscriptions.add(
        this.post$.subscribe(post => {
          this.form = this.createPostFormGroup(post)
          if (!post) {
            this.store.dispatch(readPostsItem({id: params.id}))
          }
        }),
      )
    })
  }

  public debug() {
    console.log(this.form)
  }

  public onPostFormSubmit(): void {
    if (this.form.valid) {
      this.store.dispatch(updatePostsItem({
        updatePost: {
          id: this.form.controls.id.value,
          changes: this.form.value,
        },
      }))
    } else {
      this.notification.showError('Form contains errors. Fix it and try again.')
    }
  }

  public delete(postId) {
    this.store.dispatch(deletePostsItem({id: postId}))
  }

  private createPostFormGroup(post: Post): FormGroup {
    return this.formBuilder.group({
      id: [post ? post.id : null, Validators.required],
      date: [post ? post.date : new Date(), Validators.required],
      title: [post ? post.title : '', Validators.required],
      body: [post ? post.body : '', Validators.required],
    })
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
