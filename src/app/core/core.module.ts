import { ErrorHandler, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { environment } from '../../environments/environment'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { appReducers } from './app-store/app-store.reducers'
import { appEffects } from './app-store/app-store.effects'

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { ErrorHandlerService } from './services/error-handler.service'
import { httpInterceptorProviders } from './interceptors'

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    //  ngrx
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  ],
  providers: [
    ...httpInterceptorProviders,
    {provide: ErrorHandler, useClass: ErrorHandlerService},
  ],
  exports: [],
})

export class CoreModule {
}
