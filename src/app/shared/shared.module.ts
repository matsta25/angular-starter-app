import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material.module'

import { NotificationBarComponent } from './components/notification-bar/notification-bar.component'
import { sharedInterceptorProviders } from './interceptors'
import { BackButtonDirective } from './directives/back-button.directive'
import { UnsavedChangesGuard } from './services/unsaved-changes.guard'


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    NotificationBarComponent,
    BackButtonDirective,
  ],
  entryComponents: [
    NotificationBarComponent,
  ],
  providers: [
    ...sharedInterceptorProviders,
    UnsavedChangesGuard,
  ],
  exports: [
    MaterialModule,
    BackButtonDirective,
  ],
})

export class SharedModule {
}
