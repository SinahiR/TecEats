import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AgregarproductosComponent } from './componentes/agregarproductos/agregarproductos.component';
import { CrearproductosComponent } from './componentes/crearproductos/crearproductos.component';
import { EditarproductoComponent } from './componentes/editarproducto/editarproducto.component';

//IMPORTAR

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgregarproductosComponent,
    CrearproductosComponent,
    EditarproductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
