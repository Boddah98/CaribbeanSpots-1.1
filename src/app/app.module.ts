import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {inicioComponent} from './Componentes/inicio/inicio.component'
import {agregadoComponent} from './Componentes/agregado/agregado.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ContactoService} from './services/contacto.service'
import {HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    inicioComponent,
    agregadoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    BrowserModule, 
    FormsModule,
    HttpClientModule

  ],
  providers: [MatListModule,
              ContactoService,
              HttpClientModule,
              ContactoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
