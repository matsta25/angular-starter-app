import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { MessageInterceptor } from './message.interceptor'

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: MessageInterceptor, multi: true}
]
