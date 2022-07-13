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
  save(data:any){
    return this.htpp.post('http://localhost:3000/contatos', data)
  }
}
