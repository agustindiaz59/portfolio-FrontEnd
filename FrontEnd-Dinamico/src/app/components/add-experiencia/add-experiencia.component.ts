import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent {
  formAdd:FormGroup;

  constructor( private common:CommonService, protected auth:AuthService, private formBuilder:FormBuilder){
    this.formAdd=formBuilder.group({
      empresa:["",Validators.required],
      puesto:["",Validators.required],
      lugar:["",Validators.required]
    });
  }
  enviar(){
    this.auth.agregar("trabajo",this.formAdd.value).subscribe(data=>{window.location.reload()})
  }
}
