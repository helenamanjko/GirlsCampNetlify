import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css'],
})
export class PostagemComponent implements OnInit {

  nome = environment.nome
  id = environment.id

  postagem: Postagem = new Postagem();
  listaPostagem: Postagem[];
  idPost: number
  palavra: string 

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;

  user: User = new User();
  idUser = environment.id;
  idUserPost: number


  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alertas: AlertasService,
    private route: ActivatedRoute

  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.alertas.showAlertDanger('Ops! Sua sessão terminou...');
      this.router.navigate(['/login']);
    }
    console.log(environment);
    this.postagemService.refreshToken();
    this.temaService.refreshToken();

    this.findAllTema();
    this.getAll()
    //console.log(this.listaPostagem);

    //this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)
  }

  getAll(){
    this.postagemService.getAll().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
    })
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  findByConteudoPostagem(){

    if(this.palavra == ''){
      this.getAll()
    }else{
      this.postagemService.getByConteudoPostagem(this.palavra).subscribe((resp: Postagem[]) => {
        this.listaPostagem = resp
      })
    }
  }

  findAllTema() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    });
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp;
    });
  }

  cadastrar() {
    this.user.id = this.idUser;
    this.postagem.usuario = this.user;
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;
    this.postagemService
      .postPostagem(this.postagem)
      .subscribe((resp: Postagem) => {
        this.postagem = resp;
        this.alertas.showAlertSuccess('Postagem realizada com sucesso!!');

        this.getAll();
        this.postagem = new Postagem();
      });
  }

  atualizar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService
    .putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem atualizada com sucesso!!!')
      this.router.navigate(['/postagem'])
      this.getAll();
    })
  }

  apagar(){
    //this.idPost = this.postagem.id
    this.postagemService.deletePostagem(this.idPost).subscribe(() => {
      this.alertas.showAlertSuccess('Postagem apagada com sucesso!!')
      this.router.navigate(['/postagem'])
    })
  }

}
