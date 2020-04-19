import { Injectable } from '@angular/core'
import { PostsService } from '../services/posts.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  createPostsItem,
  createPostsItemFail,
  createPostsItemSuccess,
  deletePostsItem,
  deletePostsItemFail,
  deletePostsItemSuccess,
  readPostsItem,
  readPostsItemFail,
  readPosts,
  readPostsFail,
  readPostsSuccess,
  readPostsItemSuccess,
  updatePostsItem,
  updatePostsItemFail,
  updatePostsItemSuccess
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
      ofType(createPostsItem.type),
      mergeMap(({post}) => this.postsService.createPost(post).pipe(
        map((response: HttpResponseModel<Post>) => ({
          type: createPostsItemSuccess.type,
          post: response,
        })),
        catchError(() => of({
          type: createPostsItemFail.type,
        }))
      ))
    )
  )

  readPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readPosts.type, deletePostsItemSuccess.type),
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
      ofType(readPostsItem.type),
      mergeMap(({id}) => this.postsService.readPost(id).pipe(
        map((response: HttpResponseModel<Post>) => ({
          type: readPostsItemSuccess.type,
          post: response,
        })),
        catchError(() => of({
          type: readPostsItemFail.type,
        }))
      ))
    )
  )

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePostsItem.type),
      mergeMap(({post}) => this.postsService.updatePost(post).pipe(
        map((response: HttpResponseModel<Post>) => ({
          type: updatePostsItemSuccess.type,
          post: response,
        })),
        catchError(() => of({
          type: updatePostsItemFail.type,
        }))
      ))
    )
  )

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePostsItem.type),
      mergeMap(({id}) => this.postsService.deletePost(id).pipe(
        map((response: HttpResponseModel<Post>) => ({
          type: deletePostsItemSuccess.type,
          post: response,
        })),
        catchError(() => of({
          type: deletePostsItemFail.type,
        }))
      ))
    )
  )

  navigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPostsItemSuccess.type, updatePostsItemSuccess.type),
      tap(({user}) => this.router.navigate(['/', 'posts'])),
    ),
    {dispatch: false},
  )
}
