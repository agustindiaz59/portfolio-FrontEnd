import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  miPortafolio: any ={};

  constructor( private common:CommonService, protected auth:AuthService){
    this.common.obtenerDatos().subscribe(data =>{this.miPortafolio = data;});
  }


}
