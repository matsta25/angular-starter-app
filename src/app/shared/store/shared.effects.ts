import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, mapTo, switchMap } from 'rxjs/operators'
import { fromEvent, merge, of } from 'rxjs'
import { checkIsOnline, setIsOnline } from './shared.actions'
import { NotificationService } from '../services/notification.service'
import { MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class SharedEffects {

  ref: MatSnackBarRef<SimpleSnackBar> = null

  constructor(private actions$: Actions, private notificationService: NotificationService) {
  }

  checkIsOnline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkIsOnline.type),
      switchMap(() => {
        return merge(
          of(navigator.onLine),
          fromEvent(window, 'online').pipe(mapTo(true)),
          fromEvent(window, 'offline').pipe(mapTo(false))
        )
      }),
      map(isOnline => {
        this.showHideNotification(isOnline)
        return {
          isOnline,
          type: setIsOnline.type,
        }
      })
    )
  )

  private showHideNotification(isOnline: boolean) {
    if (!isOnline) {
      this.ref = this.notificationService.showError('You are currently offline.')
    } else {
      if (this.ref) {
        this.notificationService.dismiss(this.ref)
      }
    }
  }
}
