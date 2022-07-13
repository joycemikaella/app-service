import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private htpp:HttpClient) { }

  getContatos(){
    return this.htpp.get('http://localhost:3000/contatos')
  }
  getUmContato(id:number){
    return this.htpp.get(`http://localhost:3000/contatos/${id}`)
  }
  save(data:any){
    return this.htpp.post('http://localhost:3000/contatos', data)
  }
  alterarContato(dados: any){
    return this.htpp.put(`http://localhost:3000/contatos/${dados.id}`, dados)
  }
}
