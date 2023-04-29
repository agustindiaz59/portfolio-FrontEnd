import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-spin-de-carga',
  templateUrl: './spin-de-carga.component.html',
  styleUrls: ['./spin-de-carga.component.css']
})
export class SpinDeCargaComponent {
  constructor(private common:CommonService,private ruta:Router){
      this.common.obtenerDatos().subscribe(data=>{
      this.ruta.navigate(['/inicio'])
    })
  }
}
