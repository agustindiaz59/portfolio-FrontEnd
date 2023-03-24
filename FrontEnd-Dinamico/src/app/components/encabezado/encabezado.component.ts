import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  miPortafolio: any ;

  constructor( private common:CommonService, protected auth:AuthService){}

  ngOnInit():void{
    this.common.obtenerDatos().subscribe(data =>
      {
        this.miPortafolio = data;
      }
    );
  }
}
