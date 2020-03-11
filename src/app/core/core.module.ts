import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageNotFoundComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  bootstrap: []
})

export class CoreModule {
}
