import { Injectable } from '@angular/core'
import { ErrMessage } from '../models/err-message.model'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class LoggerService {

  constructor(private http: HttpClient) {
  }

  public logError(error: any) {
    const errMessage: ErrMessage = this.createErrMessage(error)
    this.http.post(`${environment.baseUrl}/err-logs`, errMessage).subscribe()
  }

  private createErrMessage(error: any): ErrMessage {
    const date = new Date().toISOString()
    if (error instanceof HttpErrorResponse) {
      return {
        date,
        type: 'HTTP ERR',
        message: error.message,
        status: error.status,
      }
    } else if (error instanceof TypeError) {
      return {
        date,
        type: 'TYPE ERR',
        message: error.message,
      }
    } else if (error instanceof Error) {
      return {
        date,
        type: 'GENERAL ERR',
        message: error.message,
      }
    } else {
      return {
        date,
        type: 'UNKNOWN ERR',
        message: error.message,
      }
    }
  }
}
