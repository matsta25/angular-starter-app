import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsersRoutingModule } from './users-routing.module'
import { UsersComponent } from './users.component'
import { UsersListComponent } from './components/users-list/users-list.component'
import { SharedModule } from '../../shared/shared.module'


@NgModule({
  declarations: [
      UsersComponent,
      UsersListComponent,
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
    ],
})
export class UsersModule {
}
