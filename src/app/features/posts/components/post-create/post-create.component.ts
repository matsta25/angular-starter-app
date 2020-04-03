import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'
import { PostsState } from '../../store/posts.state'
import { createPost } from '../../store/posts.actions'
import { Post } from '../../models/post.model'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  public postCreateForm: FormGroup

  constructor(private fb: FormBuilder, private store: Store<PostsState>) {
  }

  ngOnInit(): void {
    this.postCreateForm = this.createPostCreateFormGroup()
  }

  onPostFormSubmit() {
    const post: Post = this.postCreateForm.value
    this.store.dispatch(createPost({post}))
  }

  private createPostCreateFormGroup() {
    return this.fb.group({
      title: '',
      body: ''
    })
  }
}
