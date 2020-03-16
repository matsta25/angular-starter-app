import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material.module'
import { NotificationComponent } from './components/notification/notification.component'
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  exports: [
    ...importedExportedModules
  ],
})

export class SharedModule {
}
