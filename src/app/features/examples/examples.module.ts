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
import { LoadingExampleComponent } from './components/loading-example/loading-example.component'
import { InputDebounceComponent } from './components/input-debounce/input-debounce.component'
import { ConfirmDialogExampleComponent } from './components/confirm-dialog-example/confirm-dialog-example.component'

@NgModule({
  declarations: [
    ExamplesComponent,
    NotificationExampleComponent,
    LocalStorageExampleComponent,
    ErrorHandlerExampleComponent,
    LoadingExampleComponent,
    InputDebounceComponent,
    ConfirmDialogExampleComponent,
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule,
  ],
})
export class ExamplesModule {
}
