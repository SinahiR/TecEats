import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from  './componentes/login/login.component'
import {RegistroComponent } from './componentes/registro/registro.component'
import { PruebaComponent } from './componentes/prueba/prueba.component';
import{ProductosComponent}from './componentes/productos/productos.component'
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';


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
  path:'login/:tipo',
  component:LoginComponent 
},
{
  path:'registro',
  component:RegistroComponent
},
{
  path:'prueba',
  component:PruebaComponent
},
{
  path:'productos',
  component:ProductosComponent
},
{
  path:'lista',
  component:ListaProductosComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
