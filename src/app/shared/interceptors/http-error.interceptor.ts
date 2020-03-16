import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { NotificationService } from '../services/notification.service'

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = ''
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`
          } else {
            // server-side error
            // http://getstatuscode.com/500
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
          }
          this.notificationService.showError(errorMessage)
          // TODO: complete ngx-progress
          return throwError(errorMessage)
        })
      )
  }
}
