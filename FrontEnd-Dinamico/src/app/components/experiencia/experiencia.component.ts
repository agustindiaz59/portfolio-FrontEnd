import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  miPortafolio: any ={};
  vacio : string = "";
  
  constructor( private common:CommonService,protected auth:AuthService){
  }

  ngOnInit():void{
    this.common.obtenerDatos().subscribe(data =>
      {
        this.miPortafolio = data;
      }
    );
  };
  borrarExp(id:number){
    if(confirm("Esta seguro de que desea borrar la experiencia?")){
      this.auth.borrar("trabajo",id).subscribe(data=>{window.location.reload()})
    }
  }
}
