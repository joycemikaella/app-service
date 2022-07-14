import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private htpp:HttpClient) { }

  getContatos(){
    return this.htpp.get(`${environment.BASE_URL}contatos`)
  }
  getUmContato(id:number){
    return this.htpp.get(`${environment.BASE_URL}contatos/${id}`)
  }
  save(data:any){
    return this.htpp.post(`${environment.BASE_URL}contatos`, data)
  }
  alterarContato(dados: any){
    return this.htpp.put(`${environment.BASE_URL}contatos/${dados.id}`, dados)
  }
}
