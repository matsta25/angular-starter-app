import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PostsRoutingModule } from './posts-routing.module'
import { PostsComponent } from './components/posts/posts.component';
import { PostsListComponent } from './components/posts-list/posts-list.component'


@NgModule({
  declarations: [PostsComponent, PostsListComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ]
})
export class PostsModule {
}
