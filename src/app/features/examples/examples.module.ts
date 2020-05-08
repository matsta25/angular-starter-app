/*
  This will be deleted after execute ./cleanup.sh script.
*/

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { ExamplesRoutingModule } from './examples-routing.module'
import { ExamplesComponent } from './examples.component'
import { NotificationExampleComponent } from './components/notification-example/notification-example.component'
import { LocalStorageExampleComponent } from './components/local-storage-example/local-storage-example.component'
import { ErrorHandlerExampleComponent } from './components/error-handler-example/error-handler-example.component'
import { OfflineExampleComponent } from './components/offline-example/offline-example.component'
import { LoadingExampleComponent } from './components/loading-example/loading-example.component'

@NgModule({
  declarations: [
    ExamplesComponent,
    NotificationExampleComponent,
    LocalStorageExampleComponent,
    ErrorHandlerExampleComponent,
    OfflineExampleComponent,
    LoadingExampleComponent,
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule,
  ],
})
export class ExamplesModule {
}
