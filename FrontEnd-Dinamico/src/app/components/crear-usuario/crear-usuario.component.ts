import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
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
      this.auth.crearUsuario(this.form.value).subscribe(()=>{
        alert('Perfecto, ahora inicie sesion con su usuario')
        this.ruta.navigate(['/login'])
      })
    }else{
      alert("ups algun dato salio mal");
      this.form.markAllAsTouched;
    }
  }

}
