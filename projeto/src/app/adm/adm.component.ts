import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OrderServiceService } from '../service/order-service.service';
import { serviceModel } from '../service/serviceModel';
HttpClient
serviceModel
OrderServiceService



@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {

  constructor(private service: OrderServiceService) {}

  ngOnInit(): void {
    this.ListarProdutos()
  }

  

  model: serviceModel = new serviceModel()

  listar: Array<any> = new Array()

  ListarProdutos() {
    
    this.service.listar().subscribe( L => {
      this.listar = L
    }, err => console.log(err))
  }

  Cadastrar() {
    console.log(this.model);
    this.service.adicionar(this.model).subscribe(
      a => {
        this.model = new serviceModel()
        this.ListarProdutos()
      },
      err => {
        console.log('Erro ao cadastrar', err);
      }
    )
  }

  Atualizar(id: number) {
    console.log(this.model);
    this.service.atualizar(this.model, id).subscribe(
      L => {
        this.model = new serviceModel();
        this.ListarProdutos();
      },
      err => {
        console.log('Erro ao cadastrar', err);
      }
    );
  }

  Excluir(id: number) {
    console.log(this.model);
    this.service.deletar(id).subscribe(
      a => {
        this.model = new serviceModel();
        this.ListarProdutos();
      },
      err => {
        console.log('Erro ao excluir alunos', err);
      }
    )
  }

}
