import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PostsState} from '../../store/posts.state';
import {Observable} from 'rxjs';
import {Post} from '../models/post.model';
import {selectPosts} from '../../store/posts.selectors';
import {readPosts} from '../../store/posts.actions';
import {NotificationService} from "../../../../shared/services/notification.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private store: Store<PostsState>, private notificationService: NotificationService) {
    this.store.dispatch(readPosts());
  }

  ngOnInit(): void {
    this.posts$ = this.store.pipe(select(selectPosts));

    // this.notificationService.openSuccess('You are back online.','close');
  }

}
