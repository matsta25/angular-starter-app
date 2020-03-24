import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material.module'
import { NotificationComponent } from './components/notification/notification.component'
import { httpInterceptorProviders } from './interceptors'

const importedExportedModules = [
  MaterialModule
]

@NgModule({
  imports: [
    CommonModule,
    ...importedExportedModules
  ],
  declarations: [
    NotificationComponent
  ],
  entryComponents: [
    NotificationComponent
  ],
  providers: [
    ...httpInterceptorProviders
  ],
  exports: [
    ...importedExportedModules
  ],
})

export class SharedModule {
}
