
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasComponent } from '../alertas/alertas.component';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user:User=new User()
  tipoUsuario: string
  confirmSenha: string

  constructor(
    private auth : AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll (0,0)
  }
  
  confirmarSenha(event:any){
    this.confirmSenha = event.target.value
  }


    tipoUser(event:any){
      this.tipoUsuario = event.target.value
    }

    cadastrar(){
      this.user.tipoUsuario = this.tipoUsuario
      if (this.user.senha != this.confirmSenha) {
        this.alertas.showAlertDanger('As senhas estão incorretas!')
        
      }
      else{
        console.log('para aqui')
      this.auth.cadastrar(this.user).subscribe((resp:User)=>{
        this.user = resp
        this.router.navigate(['/login'])
        this.alertas.showAlertSuccess('Uhul!!! Usuário cadastrado com sucesso, agora basta logar')
      })
    }
    }
}
