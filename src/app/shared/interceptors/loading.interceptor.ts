import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { SharedState } from '../store/shared.state'
import { loadingOff, loadingOn } from '../store/shared.actions'
import { finalize } from 'rxjs/operators'

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private store: Store<SharedState>) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.store.dispatch(loadingOn({url: request.url}))

    return next.handle(request).pipe(
      finalize(() => {
        this.store.dispatch(loadingOff({url: request.url}))
        // add more action if needed like hide notification
      })
    )
  }
}
