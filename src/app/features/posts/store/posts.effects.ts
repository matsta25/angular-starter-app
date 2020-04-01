import { Injectable } from '@angular/core'
import { PostsService } from '../services/posts.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { createPost, createPostFail, createPostSuccess, readPosts, readPostsFail, readPostsSuccess } from './posts.actions'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { HttpResponseModel } from '../../../shared/models/http-response-model.model'
import { Post } from '../models/post.model'
import { of } from 'rxjs'

@Injectable()
export class PostsEffects {

  constructor(private postsService: PostsService, private actions$: Actions) {
  }

  // CRUD

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPost.type),
      mergeMap(({post}) => this.postsService.createPost(post).pipe(
        map((response: HttpResponseModel<Post>) => (
          {
            posts: response,
            type: createPostSuccess.type,
          })),
        catchError(() => of({
          type: createPostFail.type
        }))
      ))
    )
  )

  readPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readPosts.type),
      mergeMap(() => this.postsService.readPosts().pipe(
        map((response: HttpResponseModel<Post[]>) => (
          {
            posts: response,
            type: readPostsSuccess.type,
          })),
        catchError(() => of({
          type: readPostsFail.type
        }))
      ))
    )
  )
}
