import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { UsersApiService } from '../services/users-api.service'
import { readUsers, readUsersFail, readUsersSuccess } from './users.actions'
import { User } from '../models/user.model'
import { CollectionParams } from '../../../shared/models/collection-params.model'

@Injectable()
export class UsersEffects {
    constructor(private readonly actions: Actions, private usersApiService: UsersApiService) {
    }

    readUsersItems$ = createEffect(() =>
        this.actions.pipe(
            ofType(readUsers.type),
            switchMap(({collectionParams}) => this.usersApiService.readItems(collectionParams).pipe(
                map((response: User[]) => ({
                    type: readUsersSuccess.type,
                    users: response,
                })),
                catchError(() => of({type: readUsersFail.type})),
            )),
        ),
    )
}
