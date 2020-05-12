import { Injectable } from '@angular/core'
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'


@Injectable()
export class ActionInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const responseStatusCode: number = event.status
          this.statusCodeHandler(responseStatusCode)
        }
      }),
      catchError((error: Error | HttpErrorResponse): Observable<any> => {
        if (error instanceof HttpErrorResponse) {
          const errorStatusCode: number = error.status
          this.statusCodeHandler(errorStatusCode)
        }
        return throwError(error)
      }),
    )
  }

  private statusCodeHandler(code: number) {
    switch (code) {
      case 401:
        this.router.navigate(['/login'])
        break
    }
  }
}
