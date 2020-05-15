import { createFeatureSelector, createSelector } from '@ngrx/store'
import { usersAdapter, UsersState } from './users.state'

const {selectAll} = usersAdapter.getSelectors()
const selectUsersState = createFeatureSelector<UsersState>('users')

export const selectUsers = createSelector(
  selectUsersState,
  selectAll,
)

export const selectTotalCount = createSelector(
  selectUsersState,
  (state) => state.totalCount,
)
