import {createReducer, on} from '@ngrx/store';
import {initialSharedState} from './shared.state';
import {checkIsOnline, setIsOnline} from './shared.actions';

export const sharedReducer = createReducer(
  initialSharedState,
  on(checkIsOnline, (state) => ({
    ...state,
    isOnline: false
  })),
  on(setIsOnline, (state, {isOnline}) => ({
    ...state,
    isOnline
  }))
);
