import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent {
  formAdd:FormGroup;
  constructor( private common:CommonService, protected auth:AuthService, private formBuilder:FormBuilder){

    this.formAdd=formBuilder.group({
      sobre_mi:["",Validators.required],
    });
  }
  enviar(){
    if(this.formAdd.valid){
      this.auth.persona("about",this.formAdd.value).subscribe(data =>{window.location.reload()})
    }else{
      alert("Por favor complete todos los campos")
    }
  }
}
