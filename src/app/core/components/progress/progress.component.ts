import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { NgProgress, NgProgressRef } from 'ngx-progressbar'
import { loadingOff, loadingOn } from '../../../shared/store/shared.actions'
import { SharedState } from '../../../shared/store/shared.state'


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
})
export class ProgressComponent implements OnInit, OnDestroy {

  progressRef: NgProgressRef

  constructor(private store: Store<SharedState>, private ngProgress: NgProgress) {
  }

  ngOnInit(): void {
    this.progressRef = this.ngProgress.ref()
    this.progressRef.started.subscribe(() => this.store.dispatch(loadingOn()))
    this.progressRef.completed.subscribe(() => this.store.dispatch(loadingOff()))
  }

  ngOnDestroy() {
    this.progressRef.destroy()
  }
}
