import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material.module'
import { NotificationComponent } from './components/notification/notification.component'
import { ReactiveFormsModule } from '@angular/forms'

const importedExportedModules = [
  MaterialModule,
  ReactiveFormsModule
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
  providers: [],
  exports: [
    ...importedExportedModules
  ],
})

export class SharedModule {
}
