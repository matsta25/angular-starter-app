import { createFeatureSelector, createSelector } from '@ngrx/store'
import { SharedState } from './shared.state'


export const selectSharedState = createFeatureSelector<SharedState>('shared')

export const selectIsOnline = createSelector(
  selectSharedState,
  (state: SharedState) => state.isOnline,
)

export const selectLoading = createSelector(
  selectSharedState,
  (state: SharedState) => state.loading,
)
