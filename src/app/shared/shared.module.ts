import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material.module'

import { sharedInterceptorProviders } from './interceptors'
import { BackButtonDirective } from './directives/back-button.directive'
import { UnsavedChangesGuard } from './services/unsaved-changes.guard'
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component'
import { PageHeaderComponent } from './components/page-header/page-header.component'
import { PageHeaderBackComponent } from './components/page-header-back/page-header-back.component'
import { PageHeaderTitleComponent } from './components/page-header-title/page-header-title.component'


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    NotificationBarComponent,
    BackButtonDirective,
    PageHeaderComponent,
    PageHeaderBackComponent,
    PageHeaderTitleComponent,
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
    PageHeaderComponent,
    PageHeaderBackComponent,
    PageHeaderTitleComponent,
  ],
})

export class SharedModule {
}
