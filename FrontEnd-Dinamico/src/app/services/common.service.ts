import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService{
  private url = 'https://portfolio-api-77bt.onrender.com/datos'; //aqui va la url de la api que devuelve los datos, en este caso uso un json con el mismo formato que los datos que devuelve la api

  constructor(private http:HttpClient) {}

  //Este metodo trae los datos desde la url de la api mediante el metodo GET, devuelve un observable.
  //Un observable es un tipo de dato que esta sujeto a cambios, quienes quieran usar estos datos deben "suscribirse" con .suscribe()
  obtenerDatos():Observable<any>{
    return this.http.get(this.url) //  ./assets/data/data.json  
  }
}
