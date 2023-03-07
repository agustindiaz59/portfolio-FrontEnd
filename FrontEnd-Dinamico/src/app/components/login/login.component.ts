import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  form:FormGroup;

  constructor(private formBuilder:FormBuilder,private auth:AuthService){
    this.form=this.formBuilder.group({
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required,Validators.minLength(8)]],
    })
  }
  get Email(){
    return this.form.get("email")
  }
  get Password(){
    return this.form.get("password")
  }
  get EmailValid(){
    return false
  }
  get PasswordValid(){
    return this.Password?.touched && !this.Password.valid;
  }
  get MailValid(){
    return false;
  }
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      //llamar servicio a base de datos
      alert("Formulario Valido");
    }else{
      alert("ups algun dato salio mal");
      this.form.markAllAsTouched;
    }
  }

  Login(){
    this.auth.login(this.Email,this.Password);
  }
}
