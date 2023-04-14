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
    //Este es un formulario donde se guardaran los datos ingresados, esto debe iniciarse en el cosntructor, recordar importar las clases de arriba
    formAdd:FormGroup;
    constructor(formBuilder:FormBuilder, protected auth:AuthService, private http:HttpClient){
      //Iniciamos el formulario, diciendole que campos tendrá, el Validators lo que hace es que los datos sean obligatorios de ingresar
      //notese que el servicio auth arriba en el constructor dice "protected", esto es necesario para que funcione correctamente
      this.formAdd = formBuilder.group({
        escuela:["",Validators.required],
        titulo:["",Validators.required],
        imagen:[""],
        inicio:["",Validators.required],
        fin:["",Validators.required]
      })
    }
    //Este metodo es llamado desde el html para que: si el formulario es valido(controla los Validators) hace la peticion al servidor, y si no lo son muestra un mensaje de error
    enviar(){
      if(this.formAdd.valid){
      this.auth.agregar("educacion",this.formAdd.value).subscribe(data=>{window.location.reload()});//Esta ultima linea recarga la pagina una vez recibidos los datos
      }
      else{
        alert("Ups algun dato salio mal")
      }
    }
}
