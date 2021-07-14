import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAllTema(): Observable<Tema[]>{
    //return this.http.get<Tema[]>('https://backendthiagofaccipieri.herokuapp.com/tema',this.token);

    return this.http.get<Tema[]>('https://girlscampback.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    //template literals => uso de crase no lugar das aspas
    //serve para passar variáveis no endereço com padrão ${'variavel}
    return this.http.get<Tema>(`https://girlscampback.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    //return this.http.post<Tema>('https://backendthiagofaccipieri.herokuapp.com/tema', tema, this.token);
    return this.http.post<Tema>('https://girlscampback.herokuapp.com/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://girlscampback.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number){
    //template literals => uso de crase no lugar das aspas
    //serve para passar variáveis no endereço com padrão ${'variavel}
    return this.http.delete(`https://girlscampback.herokuapp.com/tema/${id}`, this.token)
  }
}