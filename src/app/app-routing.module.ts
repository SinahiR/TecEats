import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTAR
import {HomeComponent } from './componentes/home/home.component';
import {DescripcionComponent } from './componentes/descripcion/descripcion.component';


const routes: Routes = [
  {
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},
{
  path:'home',
  component: HomeComponent
},
{
  path:'descripcion',
  component: DescripcionComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
