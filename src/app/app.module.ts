import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgProgressModule } from 'ngx-progressbar'
import { NgProgressHttpModule } from 'ngx-progressbar/http'
import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './core/components/home/home.component'
import { HeaderComponent } from './core/components/header/header.component'
import { FooterComponent } from './core/components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    // angular
    BrowserModule,

    // ngProgess
    NgProgressModule.withConfig({spinner: false}),
    NgProgressHttpModule,

    // material design
    BrowserAnimationsModule,

    // core & shared
    CoreModule,
    SharedModule,

    // app routing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
