import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { SessionComponent } from './session.component';


@NgModule({
  declarations: [SessionComponent],

  imports: [AppRoutingModule],
  exports: [SessionComponent],
  providers: [],
})

export class SessionModule { }
