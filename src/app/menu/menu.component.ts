import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  palavra: string

  listaPostagem: Postagem[];
  postagem: Postagem = new Postagem();

  constructor(
    public auth: AuthService, 
    private router: Router,
    private postagemService: PostagemService
    ) {}

  ngOnInit() {}

  sair() {
    this.router.navigate(['/login']);

    environment.token = '';
    environment.nome = '';
    environment.id = 0;
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
}
