import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material.module'

import { NotificationComponent } from './components/notification/notification.component'
import { sharedInterceptorProviders } from './interceptors'
import { BackButtonDirective } from './directives/back-button.directive'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    NotificationComponent,
    BackButtonDirective,
  ],
  entryComponents: [
    NotificationComponent,
  ],
  providers: [
    ...sharedInterceptorProviders,
  ],
  exports: [
    MaterialModule,
    BackButtonDirective,
  ],
})

export class SharedModule {
}
