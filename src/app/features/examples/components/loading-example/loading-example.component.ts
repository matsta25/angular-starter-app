import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { SharedState } from '../../../../shared/store/shared.state'
import { selectLoading } from '../../../../shared/store/shared.selectors'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-loading-example',
  templateUrl: './loading-example.component.html',
  styleUrls: ['./loading-example.component.scss'],
})
export class LoadingExampleComponent {

  public loading$: Observable<boolean>

  constructor(private store: Store<SharedState>, private http: HttpClient) {
    this.loading$ = store.pipe(select(selectLoading))
  }

  makeHttpRequest() {
    this.http.get('http://getstatuscode.com/401').subscribe()
  }
}
