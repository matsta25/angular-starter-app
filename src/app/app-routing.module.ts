import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component'
import { HomeComponent } from './core/components/home/home.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts',
    loadChildren: () => import('./features/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'examples',
    loadChildren: () => import('./features/examples/examples.module').then(m => m.ExamplesModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
