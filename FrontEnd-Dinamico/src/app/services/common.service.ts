import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService{
  private url = "https://portfolio-api-77bt.onrender.com/datos";
  private json ="";

  constructor(private http:HttpClient) { 
    
  }
  
  obtenerDatos():Observable<any>{
    return this.http.get(this.url) //  ./assets/data/data.json
  }
}
