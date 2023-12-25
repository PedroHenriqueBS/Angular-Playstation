import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideComponent } from './components/slide/slide.component';
import { StoreComponent } from './components/store/store.component';
import { GamesComponent } from './components/games/games.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonBlueComponent } from './components/button/button-blue/button-blue.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
		MenuComponent,
  	HeaderComponent,
   	SlideComponent,
   	StoreComponent,
   	GamesComponent,
   	FooterComponent,
    ButtonComponent,
    ButtonBlueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
