import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, mapTo, switchMap } from 'rxjs/operators'
import { fromEvent, merge, of } from 'rxjs'
import { checkIsOnline, setIsOnline } from './shared.actions'
import { NotificationBarService } from '../services/notification-bar.service'
import { MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar'


@Injectable()
export class SharedEffects {

  private ref: MatSnackBarRef<SimpleSnackBar> = null

  constructor(private actions$: Actions, private notificationService: NotificationBarService) {
  }

  checkIsOnline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkIsOnline.type),
      switchMap(() => {
        return merge(
          of(navigator.onLine),
          fromEvent(window, 'online').pipe(mapTo(true)),
          fromEvent(window, 'offline').pipe(mapTo(false)),
        )
      }),
      map(isOnline => {
        this.showHideNotification(isOnline)
        return {
          isOnline,
          type: setIsOnline.type,
        }
      }),
    ),
  )

  private showHideNotification(isOnline: boolean): void {
    if (!isOnline) {
      this.ref = this.notificationService.showError('You are currently offline.', 999999)
    } else if (this.ref) {
      this.notificationService.dismiss(this.ref)
    }
  }
}
