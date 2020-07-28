import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {inicioComponent} from './Componentes/inicio/inicio.component'
import {agregadoComponent} from './Componentes/agregado/agregado.component'
const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component: inicioComponent},
  {path: 'agregado', component: agregadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
