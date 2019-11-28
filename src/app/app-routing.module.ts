import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTAR
import {HomeComponent } from './componentes/home/home.component';
import {AboutComponent } from './componentes/about/about.component';

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
  path:'about',
  component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
