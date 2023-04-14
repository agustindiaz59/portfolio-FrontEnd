import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='http://localhost:8080/'; //url de la api  http://localhost:8080/

  constructor(private http:HttpClient,private ruta:Router) {
    console.log("El servicio de autenticacion esta corriendo");
  }
  //Metodo para enviar credenciales e iniciar sesion en caso que sean correctas
  iniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url + 'authenticate',credenciales).pipe(map(data=>{
      return data;
    }))
  }
  //Metodo para cerrar sesion, removiendo el token del almacenamiento del navegador
  logOut(){
    localStorage.removeItem('auth_token')
  }
  //metodo para saber si la sesion existe, buscando el token del navegador
  public logIn():boolean{
    return (localStorage.getItem('auth_token') !== null) ? true : false
  }
  //Metodo path para edicion parcial de los datos de la persona
  persona(cosa:string,per:Object):Observable<Object>{
    return this.http.patch(this.url + "persona/" + cosa,JSON.stringify(per));
  }
  //Metodo Post para agregar datos en la base de datos
  agregar(cosa:string,valor:any):Observable<Object>{
    console.log("datos solicitados")
    return this.http.post(this.url + cosa + '/agregar',valor).pipe(map(data=>{
      window.location.reload()
      return data;
    }));
  }
  //Metodo delete para eliminar datos
  borrar(cosa:string,id:number):Observable<Object>{
    console.log(cosa + id)
    return this.http.delete(this.url + cosa +'/borrar/'+ id).pipe(map(data=>{
      window.location.reload()
      return data;
    }));
  }
}
