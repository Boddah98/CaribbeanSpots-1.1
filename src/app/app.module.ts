import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {inicioComponent} from './Componentes/inicio/inicio.component'
import {agregadoComponent} from './Componentes/agregado/agregado.component'
@NgModule({
  declarations: [
    AppComponent,inicioComponent,
    inicioComponent,
    agregadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [MatListModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
