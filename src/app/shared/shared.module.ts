import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material.module'

import { NotificationComponent } from './components/notification/notification.component'
import { sharedInterceptorProviders } from './interceptors'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    NotificationComponent,
  ],
  entryComponents: [
    NotificationComponent,
  ],
  providers: [
    ...sharedInterceptorProviders
  ],
  exports: [
    MaterialModule,
  ],
})

export class SharedModule {
}
