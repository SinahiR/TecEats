import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FoterComponent } from './componentes/foter/foter.component';
import { NavComponent } from './componentes/nav/nav.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { ProductosComponent } from './componentes/productos/productos.component';

//Import necesarios
import {AngularFireModule} from '@angular/fire';
import {environment}from '../environments/environment';
//servicios de firebase
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';


// import { HttpModule } from '@angular/http';

import {AngularFireStorageModule} from '@angular/fire/storage';
import{AngularFireDatabaseModule} from "@angular/fire/database";
import{AngularFireAuthModule} from "@angular/fire/auth";




//IMPORTAR

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    FoterComponent,
    NavComponent,
    PruebaComponent,
    ListaProductosComponent,
    ProductosComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
