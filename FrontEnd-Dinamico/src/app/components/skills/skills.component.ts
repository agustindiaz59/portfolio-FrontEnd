import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  miPortafolio: any ;
  porcentaje: any;
  
  constructor( private common:CommonService,){
  }

  ngOnInit():void{
    this.common.obtenerDatos().subscribe(data =>
      {
        this.miPortafolio = data;
      }
    );
  }
};
