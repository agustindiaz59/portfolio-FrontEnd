import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent{

  miPortafolio: any;
  vacio: string = "";
  
  constructor( private common:CommonService,protected auth:AuthService){
    this.common.obtenerDatos().subscribe(data =>
      {
        this.miPortafolio = data;
      });
  }

  borrarProy(id:number){
    if(confirm("Esta seguro de que desea borrar el proyecto?")){
      this.auth.borrar("proyecto",id).subscribe(data=>{window.location.reload()})
    }
  }

}
