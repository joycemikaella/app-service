
import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { UsuarioserviceService } from '../usuarioservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private service: UsuarioserviceService) { }

  logar(dados: any): void {
    this.service.logar(dados).subscribe(data => {
      console.log(data)
      //transforma obj em observable em string json
      let token = JSON.stringify(data)
      //transforma string json em objeto javascript
      let obj = JSON.parse(token)
      localStorage.setItem('usertoken', obj.token)
      //console.log(x.token)
      window.location.reload()
    })
  }
}
