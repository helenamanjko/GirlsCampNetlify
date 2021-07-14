import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {

  idUserPost: number

  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAll(): Observable<Postagem[]> {
    //return this.http.get<Tema[]>('https://backendthiagofaccipieri.herokuapp.com/tema',this.token);

    return this.http.get<Postagem[]>('https://girlscampback.herokuapp.com/postagens',this.token);
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    //template literals => uso de crase no lugar das aspas
    //serve para passar variáveis no endereço com padrão ${'variavel}
    return this.http.get<Postagem>(`https://girlscampback.herokuapp.com/postagens/${id}`,this.token);

  }

  getByConteudoPostagem(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://girlscampback.herokuapp.com/postagens/titulo/${titulo}`, this.token)

  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    //return this.http.post<Tema>('https://backendthiagofaccipieri.herokuapp.com/tema', tema, this.token);
    return this.http.post<Postagem>('https://girlscampback.herokuapp.com/postagens',postagem, this.token);
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>('https://girlscampback.herokuapp.com/postagens', postagem, this.token);
  }

  deletePostagem(id: number) {
    //template literals => uso de crase no lugar das aspas
    //serve para passar variáveis no endereço com padrão ${'variavel}
    return this.http.delete(`https://girlscampback.herokuapp.com/postagens/${id}`,this.token);
  }

  idLogado(){
    let ok: boolean = false
    if(environment.id == this.idUserPost ){
      ok = true
    }
      return ok
  }
}
