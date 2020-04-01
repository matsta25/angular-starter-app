import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Post } from '../../models/post.model'
import { select, Store } from '@ngrx/store'
import { PostsState } from '../../store/posts.state'
import { LocalStorageService } from '../../../../shared/services/local-storage.service'
import { readPosts } from '../../store/posts.actions'
import { selectPosts } from '../../store/posts.selectors'
import { LocalStorageKey } from '../../../../shared/models/local-storage-key.model'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts$: Observable<Post[]>
  localStorageKeyExampleValue: string

  constructor(private store: Store<PostsState>, private localStorageService: LocalStorageService) {
    this.store.dispatch(readPosts())
  }

  ngOnInit(): void {
    this.posts$ = this.store.pipe(select(selectPosts))
    this.localStorageKeyExampleValue = this.localStorageService.get(LocalStorageKey.EXAMPLE_KEY)
  }

}
