import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  miPortafolio: any;
  formAdd:FormGroup;
  formEdit:FormGroup;
    constructor(formBuilder:FormBuilder,private common:CommonService, protected auth:AuthService, private http:HttpClient){
      //Iniciamos el formulario, diciendole que campos tendrá, el Validators lo que hace es que los datos sean obligatorios de ingresar
      //notese que el servicio auth arriba en el constructor dice "protected", esto es necesario para que funcione correctamente
      this.formAdd = formBuilder.group({
        escuela:["",Validators.required],
        titulo:["",Validators.required],
        imagen:[""],
        inicio:["",Validators.required],
        fin:["",Validators.required]
      })
      this.formEdit = formBuilder.group({
        escuela:["",],
        titulo:["",],
        imagen:[""],
        inicio:["",],
        fin:["",]
      })
    //La siguiente linea se suscribe a la funcion obtenerDatos del servicio common, trayendo asi la respuesta del servidor con los datos
    //y asignandola a una variable llamada miPortfolio
    this.common.obtenerDatos().subscribe(data =>{this.miPortafolio = data;});
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

  //metodo para borrar un elemento desde la lista de la educacion, recibe el id del elemento a borrar
  borrarEdu(id:number){
    if(confirm("Esta seguro de que desea borrar la educacion?")){
      this.auth.borrar("educacion",id).subscribe(data=>{window.location.reload()})
    }
  }
  editarEdu(elemento:any){
    alert(elemento.id)
  }
}
