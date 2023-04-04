import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent {
    formAdd:FormGroup;
    constructor(formBuilder:FormBuilder, protected auth:AuthService, private http:HttpClient){
      this.formAdd = formBuilder.group({
        escuela:["",Validators.required],
        titulo:["",Validators.required],
        imagen:[""],
        inicio:["",Validators.required],
        fin:["",Validators.required]
      })
    }
    enviar(){
      if(this.formAdd.valid){
      this.auth.agregar("educacion",this.formAdd.value).subscribe(data=>{window.location.reload()});
      }
      else{
        alert("Ups algun dato salio mal")
      }
    }
}
