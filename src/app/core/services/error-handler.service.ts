import { ErrorHandler, Injectable } from '@angular/core'
import { LoggerService } from './logger.service'

@Injectable()
export class ErrorHandlerService extends ErrorHandler {
  constructor(private loggerService: LoggerService) {
    super()
  }

  handleError(error: any) {
    // if (environment.production) {
    this.loggerService.logError(error)
    // }

    super.handleError(error)
  }
}
