import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  form:FormGroup;

  constructor(private formBuilder:FormBuilder,private auth:AuthService,private ruta:Router,private http:HttpClient){
    this.form=this.formBuilder.group({
      email:["", [Validators.required, Validators.email]],
      contraseña:["", [Validators.required,Validators.minLength(8)]],
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
      console.log("Datos tomados");
      this.auth.iniciarSesion(this.form.value).subscribe(data=>{
        console.log("data: "+ JSON.stringify(data));
        this.ruta.navigate(['/inicio']);
        sessionStorage.setItem('auth_token',data.token)
      })
    }else{
      alert("ups algun dato salio mal");
      this.form.markAllAsTouched;
    }
  }

  Login(){
    this.auth.iniciarSesion(this.form.value);
  }
}
