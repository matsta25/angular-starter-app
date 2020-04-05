import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { readPost } from '../store/posts.actions'
import { PostsState } from '../store/posts.state'
import { select, Store } from '@ngrx/store'
import { selectLoading } from '../../../shared/store/shared.selectors'
import { filter, first, last, tap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { selectPost } from '../store/posts.selectors'

@Injectable({
  providedIn: 'root'
})
export class UpdatePostResolver implements Resolve<boolean> {

  constructor(private store: Store<PostsState>) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params.id

    if (id) {
      return this.store.pipe(
        select(selectPost),
        tap(loaded => {
          if (!loaded) {
            this.store.dispatch(readPost({id}))
          }
        }),
        // @ts-ignore
        filter(loaded => loaded),
        first()
      )
    }
  }
}
