import { Component } from '@angular/core';
import { UsuarioserviceService } from '../usuarioservice.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent  {

  constructor(private service: UsuarioserviceService) { }

  

  save(dados:any):void{
    this.service.save(dados).subscribe(data => console.log(data))
  }

}