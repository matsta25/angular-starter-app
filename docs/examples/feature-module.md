## Feature Module {docsify-ignore}

##### Description

This project has lazy loaded 'posts' feature.
It is an example how to structure your features.
It gives you template for ngrx store, models, services, module and routing. 

##### Usage

Feature directory structure:
```bash
└── posts
    ├── components
    │   └── posts
    │       ├── posts.component.html
    │       ├── posts.component.scss
    │       └── posts.component.ts
    ├── models
    │   └── post.model.ts
    ├── posts.module.ts
    ├── posts-routing.module.ts
    ├── services
    │   └── posts.service.ts
    └── store
        ├── posts.actions.ts
        ├── posts.effects.ts
        ├── posts.reducer.ts
        ├── posts.selectors.ts
        └── posts.state.ts
```

**`posts.component.html`**
```html
<ul *ngIf="posts$ | async as posts">
  <li *ngFor="let post of posts">
    <div>
      <h3>{{ post.title }}</h3>
    </div>
    <div>{{ post.body }}</div>
    <p>{{ post.userId }}</p>
  </li>
</ul>
```

**`posts.component.ts`**
```typescript
import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { PostsState } from '../../store/posts.state'
import { Observable } from 'rxjs'
import { Post } from '../../models/post.model'
import { selectPosts } from '../../store/posts.selectors'
import { readPosts } from '../../store/posts.actions'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>

  constructor(private store: Store<PostsState>) {
    this.store.dispatch(readPosts())
  }

  ngOnInit(): void {
    this.posts$ = this.store.pipe(select(selectPosts))
  }
}
```

**`posts.model.ts`**
```typescript
export interface Post {
  userId: string
  id: string
  title: string
  body: string
}
```

**`posts.service.ts`**
```typescript
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  public readPosts() {
    return this.http.get(`${environment.baseUrl}/posts`)
  }
}
```

**`posts.actions.ts`**
```typescript
import { createAction, props } from '@ngrx/store'
import { Post } from '../models/post.model'

// Read Posts
export const readPosts = createAction('[Posts] Read Posts')
export const readPostsSuccess = createAction('[Posts] Read Posts Success', props<{ posts: Post[] }>())
export const readPostsFail = createAction('[Posts] Read Posts Fail')

```

**`posts.effects.ts`**
```typescript
import { Injectable } from '@angular/core'
import { PostsService } from '../services/posts.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { readPosts, readPostsFail, readPostsSuccess } from './posts.actions'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { HttpResponseModel } from '../../../shared/models/http-response-model.model'
import { Post } from '../models/post.model'
import { of } from 'rxjs'

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
  )
}
```

**`posts.reducer.ts`**
```typescript
import { createReducer, on } from '@ngrx/store'
import { initialPostsState } from './posts.state'
import { readPosts, readPostsFail, readPostsSuccess } from './posts.actions'

export const postsReducer = createReducer(
  initialPostsState,
  on(readPosts, (state) => ({
    ...state,
    posts: []
  })),
  on(readPostsSuccess, (state, {posts}) => ({
    ...state,
    posts
  })),
  on(readPostsFail, (state) => ({
    ...state,
  }))
)
```

**`posts.selectors.ts`**
```typescript
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { PostsState } from './posts.state'

export const selectPostsState = createFeatureSelector<PostsState>('posts')

export const selectPosts = createSelector(
  selectPostsState,
  (state: PostsState) => state.posts
)
```

**`posts.state.ts`**
```typescript
import { Post } from '../models/post.model'

export interface PostsState {
  posts: Post[]
}

export const initialPostsState: PostsState = {
  posts: []
}
```

**`posts.module.ts`**
```typescript
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PostsRoutingModule } from './posts-routing.module'
import { PostsComponent } from './components/posts/posts.component'


@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ]
})
export class PostsModule {
}
```

**`posts-routing.module.ts`**
```typescript
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PostsComponent } from './components/posts/posts.component'

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}

```
