import { RouterModule, Routes } from '@angular/router'
import { ExamplesComponent } from './examples.component'
import { ExamplesListComponent } from './components/examples-list/examples-list.component'
import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ExamplesListComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {
}
