import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject,observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='https://portfolio-api-77bt.onrender.com'; //url de la api
  currentUser: BehaviorSubject<any>;
  token: any;


  constructor(private http:HttpClient) {
    console.log("El servicio de autenticacion esta corriendo");
    this.currentUser=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }
  iniciarSesion(credenciales:any){
    this.http.post(this.url,credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      console.log('data: '+JSON.stringify(data))
    }))
  }


  //Este metodo conecta a la url de la base de datos, mediante el metodo post a /authenticate 
  //enviando un json con el email y password, luego se suscribe para esperar un objeto como respuesta (resp)
  //luego redirecciona a la ruta perfil
  //luego se guarda el token en el navegador, si la respuesta no tiene un token, este no se guardara al no encontrarse 
  login(email: any, password: any){
      this.http.post(this.url + '/authenticate',{"email":email,"password":password}).subscribe(
      (resp:any)=>{
        localStorage.setItem('auth_token',resp.token)
      }
    )
  }

  //se borra el token del navegador
  logOut(){
    localStorage.removeItem('token')
  }

  //servicio para saber si la sesion existe
  public get logIn():boolean{
    return (localStorage.getItem('token') !== null);
  }
}
