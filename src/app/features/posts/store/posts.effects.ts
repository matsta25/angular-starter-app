import {Injectable} from '@angular/core';
import {PostsService} from '../components/services/posts.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {readPosts, readPostsFail, readPostsSuccess} from './posts.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {HttpResponseModel} from '../../../shared/models/http-response-model.model';
import {Post} from '../components/models/post.model';
import {of} from 'rxjs';

@Injectable()
export class PostsEffects {

  constructor(private postsService: PostsService, private actions$: Actions) {
  }

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
  );
}
