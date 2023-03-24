import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  miPortafolio: any ;
  
  constructor( private common:CommonService,){
  }

  ngOnInit():void{
    this.common.obtenerDatos().subscribe(data =>
      {
        this.miPortafolio = data;
      }
    );
  };
}
