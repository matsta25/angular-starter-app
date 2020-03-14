import { Type } from '@angular/core'
import { PostsEffects } from '../../features/posts/store/posts.effects'
import { SharedEffects } from '../../shared/store/shared.effects'

export const appEffects: Type<any>[] = [
  PostsEffects,
  SharedEffects
]
