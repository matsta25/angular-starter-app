import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {SharedState} from '../shared/store/shared.state';
import {checkIsOnline} from '../shared/store/shared.actions';
import {selectIsOnline} from '../shared/store/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isOnline$: Observable<boolean>;

  constructor(private store: Store<SharedState>) {
    this.store.dispatch(checkIsOnline());
  }

  ngOnInit(): void {
    this.isOnline$ = this.store.pipe(select(selectIsOnline));
  }
}
