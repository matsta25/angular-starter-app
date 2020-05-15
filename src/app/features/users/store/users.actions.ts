import { createAction, props } from '@ngrx/store'
import { User } from '../models/user.model'
import { CollectionParams } from '../../../shared/models/collection-params.model'

export const readUsers = createAction('[Users/API] Fetch All Users', props<{ collectionParams: CollectionParams }>())
export const readUsersSuccess = createAction('[Users/API] Fetch All Users Success', props<{ users: User[], totalCount: number }>())
export const readUsersFail = createAction('[Users/API] Fetch All Users Fail')
