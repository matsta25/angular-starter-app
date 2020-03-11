import {Type} from '@angular/core';
import {PostsEffects} from '../../features/posts/store/posts.effects';

export const appEffects: Type<any>[] = [
  PostsEffects
];
