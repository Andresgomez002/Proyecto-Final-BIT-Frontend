import { Injectable, OnInit } from '@angular/core';
import { New } from '../protected/interfaces/new.interface';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewResponse } from '../protected/interfaces/new-response-interface';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  BASE_URL: string = environment.baseUrl;
  token!: string;
  headers!: HttpHeaders;



  constructor(private http: HttpClient) { 
    const token = localStorage.getItem( 'token' );    // Obtiene el Token del LocalStorage
    this.token = token ? token : '';                  // Verifica si existe el token en el LocalStorage
    this.headers = new HttpHeaders().set( 'X-Token', `${ this.token }` );
  }
  getNews() {

    return this.http.get<NewResponse>(
      `${ this.BASE_URL }/notice`,   // URL del BackEnd al que debemos hacer la peticion
      { headers: this.headers }                         // Cabeceras con información requerida
    )
    .pipe(
      tap( (response: any) => {
        console.log( response );
      }),
      map( (response: { [x: string]: any; }) => response[ 'notice' ] )
    );
  }
}
