import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {inicioComponent} from './Componentes/inicio/inicio.component'
import {agregadoComponent} from './Componentes/agregado/agregado.component'
import { ReactiveFormsModule } from '@angular/forms';
import {contactoService} from './services/contacto.service'
@NgModule({
  declarations: [
    AppComponent,inicioComponent,
    inicioComponent,
    agregadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [MatListModule,contactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
