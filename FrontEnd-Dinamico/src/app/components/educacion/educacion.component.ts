import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { EdicionComponent } from '../edicion/edicion.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  miPortafolio: any;
  
  constructor( private common:CommonService,protected auth:AuthService){
    this.common.obtenerDatos().subscribe(data =>
      {
        this.miPortafolio = data;
      });
  }

  eduImagen(i:number):boolean{
    return (this.miPortafolio.educacion[i].imagen !== "");
  };
  borrarEdu(id:number){
    if(confirm("Esta seguro de que desea borrar la educacion?")){
      this.auth.borrar("educacion",id).subscribe(data=>{window.location.reload()})
    }
  }
}
