import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject,catchError,map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='https://portfolio-api-77bt.onrender.com/authenticate'; //url de la api
  currentUser: BehaviorSubject<any>;
  token: any;
  resp:any;


  constructor(private http:HttpClient,private ruta:Router) {
    console.log("El servicio de autenticacion esta corriendo");
    this.logOut();
    this.currentUser=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }
  iniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url,credenciales).pipe(map(data=>{
      console.log(credenciales);
      console.log('data: '+JSON.stringify(data));
      return data;
    }))
  }


  //Este metodo conecta a la url de la base de datos, mediante el metodo post a /authenticate 
  //enviando un json con el email y password, luego se suscribe para esperar un objeto como respuesta (resp)
  //luego redirecciona a la ruta perfil
  //luego se guarda el token en el navegador, si la respuesta no tiene un token, este no se guardara al no encontrarse 
  

  //se borra el token del navegador
  logOut(){
    sessionStorage.removeItem('auth_token')
  }

  //servicio para saber si la sesion existe
  public logIn():boolean{
    return (sessionStorage.getItem('auth_token') !== null) ? true : false
  }
}
