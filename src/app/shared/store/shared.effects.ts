import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mapTo, switchMap} from 'rxjs/operators';
import {fromEvent, merge, of} from 'rxjs';
import {checkIsOnline, setIsOnline} from './shared.actions';

@Injectable()
export class SharedEffects {

  constructor(private actions$: Actions) {
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
        return {
          isOnline,
          type: setIsOnline.type,
        };
      })
    )
  );
}
