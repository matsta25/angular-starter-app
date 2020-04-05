import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material.module'

import { NotificationComponent } from './components/notification/notification.component'

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
  providers: [],
  exports: [
    MaterialModule,
  ],
})

export class SharedModule {
}
