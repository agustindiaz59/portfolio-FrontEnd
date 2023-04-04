import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent {
  formAdd:FormGroup;
  constructor(protected auth:AuthService, private formBuilder:FormBuilder){
    this.formAdd=formBuilder.group({
      nombre_hab:["",Validators.required],
      porcentaje:[0,Validators.required]
    })
  };
  enviar(){
    if(this.formAdd.valid){
      this.auth.agregar("skills",this.formAdd.value).subscribe(data=>{window.location.reload()});
    }else{
      alert("Ups algun dato salio mal!")
    }
    
  }
}
