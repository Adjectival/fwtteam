import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Character }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ Character ],
  bootstrap:    [ Character ]
})
export class AppModule { }
