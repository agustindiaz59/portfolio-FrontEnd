import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent {
  formAdd:FormGroup;
  constructor(protected auth:AuthService,private http:HttpClient,private formBuilder:FormBuilder,private ruta:Router){
    this.formAdd=formBuilder.group({
      nombre:["",Validators.required],
      link:["",Validators.required],
      descripcion:["",Validators.required]
    })
  }
  agregarProyecto(){
    if(this.formAdd.valid){
      this.auth.agregar("proyecto",this.formAdd.value).subscribe(data=>{window.location.reload()});
    }else{
      alert("Ups algun dato salio mal!")
    }
  }
}
