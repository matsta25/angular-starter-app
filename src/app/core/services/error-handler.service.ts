import { ErrorHandler, Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { ErrMessage } from '../models/err-message.model'

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler {
  constructor(private http: HttpClient) {
    // FIXME: fix tslint err: "'super' can only be referenced in a derived class"
    // @ts-ignore
    super(http)
  }

  handleError(error: any) {
    if (environment.production) {
      this.logError(error)
    }

    // @ts-ignore
    super.handleError(error)
  }

  private logError(error: any) {
    let errMessage: ErrMessage

    const date = new Date().toISOString()
    if (error instanceof HttpErrorResponse) {
      errMessage = {
        date,
        type: 'HTTP ERR',
        message: error.message,
        status: error.status
      }
    } else if (error instanceof TypeError) {
      errMessage = {
        date,
        type: 'TYPE ERR',
        message: error.message,
      }
    } else if (error instanceof Error) {
      errMessage = {
        date,
        type: 'GENERAL ERR',
        message: error.message,
      }
    } else {
      errMessage = {
        date,
        type: 'UNKNOWN ERR',
        message: error.message,
      }
    }

    return this.http.post(`${environment.baseUrl}/err`, errMessage).subscribe()
  }
}
