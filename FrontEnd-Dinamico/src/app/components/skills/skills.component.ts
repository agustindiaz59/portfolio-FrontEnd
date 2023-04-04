import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  miPortafolio: any ={};
  cantidad:string="";
  constructor( private common:CommonService, protected auth:AuthService){
    this.common.obtenerDatos().subscribe(data =>{this.miPortafolio = data;});
  }
  porcen(i:number):string{
    return this.cantidad = this.miPortafolio.skills[i].porcentaje + "%";
  }
  borrarSkill(id:number){
    if(confirm("Esta seguro de que desea borrar la skill?")){
      this.auth.borrar("skills",id).subscribe(data=>{window.location.reload()})
    }
  }
  
};
