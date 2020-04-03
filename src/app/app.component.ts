import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { SharedState } from './shared/store/shared.state'
import { checkIsOnline } from './shared/store/shared.actions'
import { showConsoleEasterEggLogo } from './core/console-easter-egg.function'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<SharedState>) {
    this.store.dispatch(checkIsOnline())
  }

  public ngOnInit(): void {
    showConsoleEasterEggLogo()
  }
}
