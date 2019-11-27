import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from  './componentes/login/login.component'
import {RegistroComponent } from './componentes/registro/registro.component'


//IMPORTAR
import {HomeComponent } from './componentes/home/home.component';


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
  path:'login',
  component:LoginComponent 
},
{
  path:'registro',
  component:RegistroComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
