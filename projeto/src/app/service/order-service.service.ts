import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serviceModel } from './serviceModel';
HttpClient
Observable
serviceModel

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/emul/"

  listar(): Observable<any> {

    return this.http.get(`${this.url}`)
  }

  adicionar(service: serviceModel): Observable<any> {

    return this.http.post(`${this.url}`, service)
  }

  atualizar(service: serviceModel, id: any): Observable<any> {

    return this.http.put(`${this.url}`.concat(id), service)
  }

  deletar(id: any): Observable<any> {

    return this.http.delete(`${this.url}`.concat(id))
  }

}
