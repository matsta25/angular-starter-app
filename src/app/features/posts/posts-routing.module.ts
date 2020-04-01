import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PostsComponent } from './components/posts/posts.component'
import { PostsListComponent } from './components/posts-list/posts-list.component'
import { PostCreateComponent } from './components/post-create/post-create.component'

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
        path: 'list',
        component: PostsListComponent
      },
      {
        path: 'create',
        component: PostCreateComponent
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
