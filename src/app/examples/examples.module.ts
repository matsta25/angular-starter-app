import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { NotificationExampleComponent } from './components/notification-example/notification-example.component'
import { SharedModule } from '../shared/shared.module';
import { LocalStorageExampleComponent } from './components/local-storage-example/local-storage-example.component';
import { ErrorHandlerExampleComponent } from './components/error-handler-example/error-handler-example.component';
import { OfflineExampleComponent } from './components/offline-example/offline-example.component'

// FIXME: delete whole 'examples' dir if PRODUCTION

@NgModule({
  declarations: [NotificationExampleComponent, LocalStorageExampleComponent, ErrorHandlerExampleComponent, OfflineExampleComponent],
  exports: [
    NotificationExampleComponent,
    LocalStorageExampleComponent,
    ErrorHandlerExampleComponent,
    OfflineExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ExamplesModule {
}
