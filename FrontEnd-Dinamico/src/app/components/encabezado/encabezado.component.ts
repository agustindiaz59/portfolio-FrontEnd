<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/services/common.service";
=======
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
>>>>>>> 623e530b88a894d879ddb01cd58597195d6ed51d

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{

  miPortafolio: any ;

  constructor( private common:CommonService, ){}

  ngOnInit():void{
    this.common.obtenerDatos().subscribe(data =>
      {
        console.log(data);
        this.miPortafolio = data;
      }
      
    );
  }
}
