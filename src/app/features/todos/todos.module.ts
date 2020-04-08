import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../../shared/shared.module'
import { TodosRoutingModule } from './todos-routing.module'

import { TodosComponent } from './todos.component'


@NgModule({
  declarations: [
    TodosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TodosRoutingModule,
  ],
})
export class TodosModule {
}
