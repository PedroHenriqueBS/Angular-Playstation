import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomeComponent } from './home.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SlideComponent } from '../../components/slide/slide.component';
import { StoreComponent } from '../../components/store/store.component';
import { GamesComponent } from '../../components/games/games.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ButtonBlueComponent } from '../../components/button/button-blue/button-blue.component';

@NgModule({
  declarations: [
		HomeComponent,
		MenuComponent,
		HeaderComponent,
		SlideComponent,
		StoreComponent,
		GamesComponent,
		FooterComponent,
		ButtonBlueComponent,
		ButtonComponent
	],

  imports: [AppRoutingModule],
  exports: [HomeComponent],
  providers: [],
})

export class HomeModule { }
