import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';



@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  heroesURL:string ="https://heroesapp-765d1.firebaseio.com/heroe.json";
  heroeURL:string ="https://heroesapp-765d1.firebaseio.com";
  constructor(private httpClient:HttpClient) {

   }

  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders ({
      'Content-Type':'application/json'
    });
    return this.httpClient.post(this.heroesURL, body, { headers } )
    };


 actualizarHeroe(heroe:Heroe, key:string){
    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders ({
      'Content-Type':'application/json'
    });

    let url = `${ this.heroeURL }/${key}.json`

    return this.httpClient.put(url, body, { headers } )
    };

}

