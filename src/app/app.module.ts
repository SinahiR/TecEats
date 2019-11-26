import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { DescripcionComponent } from './componentes/descripcion/descripcion.component';
import { DescripcionaguasComponent } from './componentes/descripcionaguas/descripcionaguas.component';
import { DescripciontortasComponent } from './componentes/descripciontortas/descripciontortas.component';
import { DescripciondonasComponent } from './componentes/descripciondonas/descripciondonas.component';


//IMPORTAR

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescripcionComponent,
    DescripcionaguasComponent,
    DescripciontortasComponent,
    DescripciondonasComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
