import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTAR
import {HomeComponent } from './componentes/home/home.component';
import {DescripcionComponent } from './componentes/descripcion/descripcion.component';
import {DescripcionaguasComponent } from './componentes/descripcionaguas/descripcionaguas.component';
import { DescripciontortasComponent} from './componentes/descripciontortas/descripciontortas.component';
import {DescripciondonasComponent } from './componentes/descripciondonas/descripciondonas.component';




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
  path:'descripcionburritos',
  component: DescripcionComponent
},
{
  path:'descripcionaguas',
  component: DescripcionaguasComponent
},
{
  path:'descripciontortas',
  component: DescripciontortasComponent
},
{
  path:'descripciondonas',
  component: DescripciondonasComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
