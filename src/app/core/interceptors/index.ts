import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { MessageInterceptor } from './message.interceptor'
import { ActionInterceptor } from './action.interceptor'

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: MessageInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ActionInterceptor, multi: true},
]
