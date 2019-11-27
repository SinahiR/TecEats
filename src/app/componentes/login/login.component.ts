import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sesion:boolean=false;
  bgBlack=true
  bgBlue=true
  constructor(private router:Router, private activo:ActivatedRoute) { }

  ngOnInit() {
    const params=this.activo.snapshot.params;
    var tipos=params.tipo;
    if(params.tipo == "m" ){
     this.sesion=true;
     tipos
      
    }
    


  }

}
