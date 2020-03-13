import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {NgProgressModule} from 'ngx-progressbar';
import {NgProgressHttpModule} from 'ngx-progressbar/http';
import {NgProgressRouterModule} from 'ngx-progressbar/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular
    BrowserModule,

    // ngProgess
    NgProgressModule.withConfig({
      spinner: false,
      color: 'red'
    }),
    NgProgressHttpModule,

    // material design
    BrowserAnimationsModule,

    // core & shared
    CoreModule,
    // TODO: check if SharedModule is necessary here
    SharedModule,

    // app routing
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
