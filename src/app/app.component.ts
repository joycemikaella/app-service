import { Component } from '@angular/core';
import { UsuarioserviceService } from './usuarioservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-service';
  userLogado:any = this.service.getDadosToken()
  constructor(private service:UsuarioserviceService){}

  logout():void{
    localStorage.removeItem('userToken')
    this.userLogado = ''
    window.location.reload()
  }
}