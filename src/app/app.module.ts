import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';

import { DescripcionComponent } from './componentes/descripcion/descripcion.component';
import { DescripcionaguasComponent } from './componentes/descripcionaguas/descripcionaguas.component';
import { DescripciontortasComponent } from './componentes/descripciontortas/descripciontortas.component';
import { DescripciondonasComponent } from './componentes/descripciondonas/descripciondonas.component';
import { AgregarproductosComponent } from './componentes/agregarproductos/agregarproductos.component';
import { CrearproductosComponent } from './componentes/crearproductos/crearproductos.component';
import { EditarproductoComponent } from './componentes/editarproducto/editarproducto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';
//IMPORTAR

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    DescripcionComponent,
    DescripcionaguasComponent,
    DescripciontortasComponent,
    DescripciondonasComponent,
    AgregarproductosComponent,
    CrearproductosComponent,
    EditarproductoComponent,
    ProductosComponent,
    PromocionesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
