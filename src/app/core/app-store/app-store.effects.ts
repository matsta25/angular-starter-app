import { Type } from '@angular/core'
import { PostsEffects } from '../../features/posts/store/posts.effects'
import { SharedEffects } from '../../shared/store/shared.effects'
import { TodosEffects } from '../../features/todos/store/todos.effects'
import { UsersEffects } from '../../features/users/store/users.effects'


export const appEffects: Type<any>[] = [
  SharedEffects,
  PostsEffects,
  TodosEffects,
  UsersEffects,
]
