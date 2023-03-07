import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  miPortafolio: any ;
  
  constructor( private common:CommonService,){
  }

  ngOnInit():void{
    this.common.obtenerDatos().subscribe(data =>
      {
        console.log(data);
        this.miPortafolio = data;
      }
    );
  };
}
