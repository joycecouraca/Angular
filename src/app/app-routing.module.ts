import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaClienteComponent } from './paginas/lista-cliente/lista-cliente.component';


const routes: Routes = [
  { path: '', component: ListaClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
