import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { SharedState } from './shared/store/shared.state'
import { checkIsOnline } from './shared/store/shared.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<SharedState>) {
    this.store.dispatch(checkIsOnline())
  }
}
