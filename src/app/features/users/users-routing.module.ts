import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UsersComponent } from './users.component'
import { UsersListComponent } from './components/users-list/users-list.component'


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'list',
        component: UsersListComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
