import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemComponent } from './postagem/postagem.component';

const routes: Routes = [
  { path: '', redirectTo: 'postagem', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'cadastro', component: CadastroComponent },

  { path: 'postagem', component: PostagemComponent },
  { path: 'postagem-edit/:id', component: PostagemEditComponent },
  { path: 'postagem-delete/:id', component: PostagemDeleteComponent },

  { path: 'tema', component: TemaComponent },
  { path: 'tema-edit/:id', component: TemaEditComponent },
  { path: 'tema-delete/:id', component: TemaDeleteComponent },

  { path: 'sobre', component: SobreComponent },

  { path: 'user-edit/:id', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
