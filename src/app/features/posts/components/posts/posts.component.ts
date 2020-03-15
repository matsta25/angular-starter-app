import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { PostsState } from '../../store/posts.state'
import { Observable } from 'rxjs'
import { Post } from '../../models/post.model'
import { selectPosts } from '../../store/posts.selectors'
import { readPosts } from '../../store/posts.actions'
import { LocalStorageService } from '../../../../shared/services/local-storage.service'
import { LocalStorageKey } from '../../../../shared/models/local-storage-key.model'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

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
