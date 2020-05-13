import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { User } from '../models/user.model'

export interface UsersState extends EntityState<User> {
}

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (item: User) => item.id,
    sortComparer: false,
})

export const initialUsersState: UsersState = usersAdapter.getInitialState({
})
