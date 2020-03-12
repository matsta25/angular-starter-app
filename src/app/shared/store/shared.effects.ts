import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mapTo, switchMap} from 'rxjs/operators';
import {fromEvent, merge, of} from 'rxjs';
import {checkIsOnline, setIsOnline} from './shared.actions';
import {NotificationService} from '../services/notification.service';

@Injectable()
export class SharedEffects {

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
        );
      }),
      map(isOnline => {
        this.showHideNotification(isOnline);
        return {
          isOnline,
          type: setIsOnline.type,
        };
      })
    )
  );

  private showHideNotification(isOnline: boolean) {
    if (!isOnline) {
      this.notificationService.openDanger('You are currently offline.', '');
    } else {
      this.notificationService.dismiss();
    }
  }
}
