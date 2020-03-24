import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  // @ts-ignore
  public logError(error: Error | HttpErrorResponse) {
    /*
     TODO: handle some error log mechanism, e.g.:
       - send err as slack message
       - send to backend and save it into file or db
     */
  }
}
