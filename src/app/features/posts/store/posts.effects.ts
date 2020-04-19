import { Injectable } from '@angular/core'
import { PostsService } from '../services/posts.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
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
        map((response: HttpResponseModel<Post>) => ({
          type: createPostSuccess.type,
          post: response,
        })),
        catchError(() => of({
          type: createPostFail.type,
        }))
      ))
    )
  )

  readPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readPosts.type, deletePostSuccess.type),
      mergeMap(() => this.postsService.readPosts().pipe(
        map((response: HttpResponseModel<Post[]>) => ({
          type: readPostsSuccess.type,
          posts: response,
        })),
        catchError(() => of({
          type: readPostsFail.type,
        }))
      ))
    )
  )

  readPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readPost.type),
      mergeMap(({id}) => this.postsService.readPost(id).pipe(
        map((response: HttpResponseModel<Post>) => ({
          type: readPostSuccess.type,
          post: response,
        })),
        catchError(() => of({
          type: readPostFail.type,
        }))
      ))
    )
  )

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePost.type),
      mergeMap(({post}) => this.postsService.updatePost(post).pipe(
        map((response: HttpResponseModel<Post>) => ({
          type: updatePostSuccess.type,
          post: response,
        })),
        catchError(() => of({
          type: updatePostFail.type,
        }))
      ))
    )
  )

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePost.type),
      mergeMap(({id}) => this.postsService.deletePost(id).pipe(
        map((response: HttpResponseModel<Post>) => ({
          type: deletePostSuccess.type,
          post: response,
        })),
        catchError(() => of({
          type: deletePostFail.type,
        }))
      ))
    )
  )

  navigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPostSuccess.type, updatePostSuccess.type),
      tap(({user}) => this.router.navigate(['/', 'posts'])),
    ),
    {dispatch: false},
  )
}
