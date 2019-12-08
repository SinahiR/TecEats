import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../services/productos.service'
import { Productos } from 'src/app/models/productos';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFireStorage}from '@angular/fire/storage';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productoss = {} as Productos;
 

  constructor(public productosServicio: ProductosService,
    private storage:AngularFireStorage) {

  }


  ngOnInit() {
  }

  onUpload(e){
  //console.log('subir',e.target.files[0]);
  const id=Math.random().toString(36).substring(2);
  const file=e.target.files[0];
  //const filePath='upload/'
  
  }

  addProductos() {


    var r = confirm("¿seguro que desea insertar este Producto ?");
    if (r == true) {

      if (this.productoss.name != '' && this.productoss.descripcion != '' && this.productoss.price != null&& this.productoss.img != ''  ) {
        this.productosServicio.addProductos(this.productoss);
        this.productoss = {} as Productos;
        alert("\'Dato Insertado Correctamente....\'");
      }
      else {
        alert("\'Datos No insertado....\'");
      }
    } else {
      alert("\'Inserción rechasada\'");
    }


  }

}
