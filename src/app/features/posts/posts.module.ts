import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { PostsRoutingModule } from './posts-routing.module'
import { SharedModule } from '../../shared/shared.module'
import { PostsComponent } from './posts.component'
import { PostsListComponent } from './components/posts-list/posts-list.component'
import { PostDetailsComponent } from './components/post-details/post-details.component'
import { PostCreateComponent } from './components/post-create/post-create.component'
import { PostUpdateComponent } from './components/post-update/post-update.component'


@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostDetailsComponent,
    PostCreateComponent,
    PostUpdateComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class PostsModule {
}
