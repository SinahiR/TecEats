import { Component, OnInit } from '@angular/core';


import { ProductosService } from '../../services/productos.service';
import { Productos } from 'src/app/models/productos';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, take } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { async } from 'q';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos = [];
  editarProducto: Productos;
  editando: boolean = false;
  public myform: FormGroup;

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  link: string;

  linkReal = new FormControl('');
 
  productoss = {} as Productos;
  constructor(public productService: ProductosService, public productosServicio: ProductosService,
    private storage: AngularFireStorage, private fb: FormBuilder) { }

  ngOnInit() {
    this.productService.getProducto().subscribe(productos => {
      console.log(productos);
      this.productos = productos;
    });
  }

  updateName() {
    this.linkReal.setValue('Nancy');
  }


  borrar(event, productos) {
    this.productService.deleteProductos(productos);
  }
  editar(event, productos) {
    this.editarProducto = productos;
    this.editando = !this.editando;

  }
  actualizar() {
    this.productService.actualizarProductos(this.editarProducto);
    this.editarProducto = {} as Productos;
    this.editando = false;
  }
  addProductos() {

    var r = confirm("¿seguro que desea insertar este Producto ?");
    if (r == true) {
      console.log(this.productoss.linkreal)

      if (this.productoss.name != '' && this.productoss.descripcion != '' && this.productoss.price != null && this.productoss.img != ''
        && this.productoss.linkreal != '') {

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



  onUpload(e) {
    //console.log('subir' ,e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const referencia = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = referencia.getDownloadURL())).subscribe();


    console.log(this.productoss.img);
    //minuto 1:13:26
  }
  //: if request.auth != null
}