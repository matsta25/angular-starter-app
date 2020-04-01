import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PostsRoutingModule } from './posts-routing.module'
import { PostsComponent } from './components/posts/posts.component'
import { PostsListComponent } from './components/posts-list/posts-list.component'
import { PostCreateComponent } from './components/post-create/post-create.component'
import { SharedModule } from '../../shared/shared.module'
import { PostUpdateComponent } from './components/post-update/post-update.component'


@NgModule({
  declarations: [PostsComponent, PostsListComponent, PostCreateComponent, PostUpdateComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule {
}
