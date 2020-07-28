import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {inicioComponent} from './Componentes/inicio/inicio.component'
import {listadoComponent} from './Componentes/listado/listado.component'
const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component: inicioComponent,
  children:[{path:'listado', component: listadoComponent}]},
  {path:'listado', component: listadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
