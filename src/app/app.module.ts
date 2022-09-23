import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponenteDePruebaComponent } from './components/componente-de-prueba/componente-de-prueba.component';
import { Subcomponente1DePruebaComponent } from './components/componente-de-prueba/subcomponente1-de-prueba/subcomponente1-de-prueba.component';
import { Subcomponente2DePruebaComponent } from './components/componente-de-prueba/subcomponente2-de-prueba/subcomponente2-de-prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteDePruebaComponent,
    Subcomponente1DePruebaComponent,
    Subcomponente2DePruebaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
