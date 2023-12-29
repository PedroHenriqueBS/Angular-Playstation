import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { PagesComponent } from './pages/pages.component';
import { SessionComponent } from './pages/session/session.component';


@NgModule({
  declarations: [AppComponent, PagesComponent, SessionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
