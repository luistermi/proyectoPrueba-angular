import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteDePruebaComponent } from './components/componente-de-prueba/componente-de-prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteDePruebaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
