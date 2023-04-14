import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  miPortafolio: any;
  
  constructor( private common:CommonService,protected auth:AuthService){
    //La siguiente linea se suscribe a la funcion obtenerDatos del servicio common, trayendo asi la respuesta del servidor con los datos
    //y asignandola a una variable llamada miPortfolio
    this.common.obtenerDatos().subscribe(data =>{this.miPortafolio = data;});
  }
  //Hice este metodo para saber si la educacion incluye una foto para saber si se mostrara o no
  eduImagen(i:number):boolean{
    return (this.miPortafolio.educacion[i].imagen !== "");
  };
  //metodo para borrar un elemento desde la lista de la educacion, recibe el id del elemento a borrar
  borrarEdu(id:number){
    if(confirm("Esta seguro de que desea borrar la educacion?")){
      this.auth.borrar("educacion",id).subscribe(data=>{window.location.reload()})
    }
  }
}
