import { Injectable } from '@angular/core'
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { ErrorService } from '../services/error.service'
import { NotificationBarService } from '../../shared/services/notification-bar.service'
import { catchError, tap } from 'rxjs/operators'
import { HttpResponseModel } from '../../shared/models/http-response-model.model'


@Injectable()
export class MessageInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService, private notificationService: NotificationBarService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const responseData: HttpResponseModel<any> = event.body
          if (responseData && responseData.message && !event.url.includes('/err-logs')) {
            this.notificationService.showSuccess(responseData.message)
          }
        }
      }),
      catchError((error: Error | HttpErrorResponse): Observable<any> => {
        if (error instanceof HttpErrorResponse) {
          const errorMsg = this.errorService.getServerMessage(error)
          this.notificationService.showError(errorMsg)
        }
        return throwError(error)
      }),
    )
  }
}
