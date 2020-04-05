/*
  This will be deleted after execute ./cleanup.sh script.
*/

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotificationExampleComponent } from './components/notification-example/notification-example.component'
import { SharedModule } from '../../shared/shared.module'
import { LocalStorageExampleComponent } from './components/local-storage-example/local-storage-example.component'
import { ErrorHandlerExampleComponent } from './components/error-handler-example/error-handler-example.component'
import { OfflineExampleComponent } from './components/offline-example/offline-example.component'
import { ExamplesListComponent } from './components/examples-list/examples-list.component'
import { ExamplesComponent } from './examples.component'
import { ExamplesRoutingModule } from './examples-routing.module';
import { LoadingExampleComponent } from './components/loading-example/loading-example.component'

@NgModule({
  declarations: [
    ExamplesComponent,
    NotificationExampleComponent,
    LocalStorageExampleComponent,
    ErrorHandlerExampleComponent,
    OfflineExampleComponent,
    ExamplesListComponent,
    LoadingExampleComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule
  ]
})
export class ExamplesModule {
}
