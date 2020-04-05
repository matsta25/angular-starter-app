import { ErrorHandler, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { environment } from '../../environments/environment'

import { SharedModule } from '../shared/shared.module'

import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { HomeComponent } from './components/home/home.component'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { EffectsModule } from '@ngrx/effects'
import { HttpClientModule } from '@angular/common/http'

import { appReducers } from './app-store/app-store.reducers'
import { appEffects } from './app-store/app-store.effects'

import { RouterModule } from '@angular/router'
import { ExamplesModule } from '../examples/examples.module'
import { ErrorHandlerService } from './services/error-handler.service'
import { httpInterceptorProviders } from './interceptors'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageNotFoundComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    // shared
    SharedModule,

    //  ngrx
    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),

    // Below 'ExamplesModule' be deleted after execute ./cleanup.sh script.
    ExamplesModule
  ],
  providers: [
    ...httpInterceptorProviders,
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    }
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ]
})

export class CoreModule {
}
