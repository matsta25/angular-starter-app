import { Injectable } from '@angular/core'
import { LoggerService } from './logger.service'
import { HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor(private loggerService: LoggerService) {
    // FIXME: fix tslint err: "'super' can only be referenced in a derived class"
    // @ts-ignore
    super()
  }

  handleError(error: Error | HttpErrorResponse) {
    if (environment.production) {
      this.loggerService.logError(error)
    }

    // @ts-ignore
    super.handleError(error)
  }
}
