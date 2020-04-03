import { Injectable } from '@angular/core'
import { PostsService } from '../services/posts.service'
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects'
import {
  createPost,
  createPostFail,
  createPostSuccess,
  deletePost,
  deletePostFail,
  deletePostSuccess,
  readPost,
  readPostFail,
  readPosts,
  readPostsFail,
  readPostsSuccess,
  readPostSuccess,
  updatePost,
  updatePostFail,
  updatePostSuccess
} from './posts.actions'
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import { HttpResponseModel } from '../../../shared/models/http-response-model.model'
import { Post } from '../models/post.model'
import { of } from 'rxjs'
import { Router } from '@angular/router'

@Injectable()
export class PostsEffects {

  constructor(private postsService: PostsService, private actions$: Actions, private router: Router) {
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
      ofType(readPosts.type, deletePostSuccess.type),
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

  readPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readPost.type),
      mergeMap(({id}) => this.postsService.readPost(id).pipe(
        map((response: HttpResponseModel<Post>) => (
          {
            post: response,
            type: readPostSuccess.type,
          })),
        catchError(() => of({
          type: readPostFail.type
        }))
      ))
    )
  )

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePost.type),
      mergeMap(({post}) => this.postsService.updatePost(post).pipe(
        map((response: HttpResponseModel<Post>) => (
          {
            post: response,
            type: updatePostSuccess.type,
          })
        ),
        catchError(() => of({
          type: updatePostFail.type
        }))
      ))
    )
  )

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePost.type),
      mergeMap(({id}) => this.postsService.deletePost(id).pipe(
        map((response: HttpResponseModel<Post>) => (
          {
            post: response,
            type: deletePostSuccess.type,
          })),
        catchError(() => of({
          type: deletePostFail.type
        }))
      ))
    )
  )

  @Effect({dispatch: false})
  navigate$ = this.actions$.pipe(
    ofType(createPostSuccess.type, updatePostSuccess.type),
    tap(() => this.router.navigate(['/', 'posts']))
  )
}
