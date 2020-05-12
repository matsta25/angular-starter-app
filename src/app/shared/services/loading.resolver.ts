import { Injectable } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { SharedState } from '../store/shared.state'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { selectLoading } from '../store/shared.selectors'
import { filter, first } from 'rxjs/operators'


@Injectable({
  providedIn: 'root',
})
export class LoadingResolver implements Resolve<boolean> {

  constructor(private store: Store<SharedState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(selectLoading),
      filter(loading => !loading),
      first(),
    )
  }
}
