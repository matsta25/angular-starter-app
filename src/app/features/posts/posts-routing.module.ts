import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PostsComponent } from './posts.component'
import { PostsListComponent } from './components/posts-list/posts-list.component'
import { PostCreateComponent } from './components/post-create/post-create.component'
import { PostUpdateComponent } from './components/post-update/post-update.component'

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: PostCreateComponent
      },
      {
        path: 'list',
        component: PostsListComponent
      },
      {
        path: ':id',
        component: PostUpdateComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
