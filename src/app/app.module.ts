import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { PostagemComponent } from './postagem/postagem.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { AlertasComponent } from './alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    SobreComponent,
    ContatoComponent,

    LoginComponent,
    CadastroComponent,
    TemaComponent,
    PostagemComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    UserEditComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    AlertasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
