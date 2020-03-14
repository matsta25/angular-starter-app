import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material.module'
import { NotificationComponent } from './components/notification/notification.component'

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
  exports: [
    ...importedExportedModules
  ],
})

export class SharedModule {
}
