import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoadingInterceptor } from './loading.interceptor'

export const sharedInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
]
