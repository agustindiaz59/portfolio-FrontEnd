import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  form:FormGroup;

  constructor(private formBuilder:FormBuilder,private auth:AuthService,private ruta:Router){
    this.form=this.formBuilder.group({
      email:["", [Validators.required, Validators.email]],
      contraseña:["", [Validators.required,Validators.minLength(8)]],
    })
  }
  onEnviar(event:Event){
    event.preventDefault;

    if(this.form.valid){
      //llamar servicio a base de datos
      console.log("Datos tomados");
      this.auth.iniciarSesion(this.form.value).subscribe(data=>{
        console.log("data: "+ JSON.stringify(data));
        this.ruta.navigate(['/inicio']);
        localStorage.setItem('auth_token',data.token)
      })
    }else{
      alert("ups algun dato salio mal");
      this.form.markAllAsTouched;
    }
  }
}
