import { Action, createReducer, on } from '@ngrx/store'
import { initialUsersState, usersAdapter, UsersState } from './users.state'
import { readUsersSuccess } from './users.actions'

const reducer = createReducer(
    initialUsersState,
    on(readUsersSuccess, (state, { users }) => usersAdapter.setAll(users, state)),
)

export function usersReducer(state: UsersState, action: Action) {
    return reducer(state, action)
}
