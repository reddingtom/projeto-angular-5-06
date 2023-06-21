import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../service/order-service.service';
import { serviceModel } from '../service/serviceModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  constructor(private service: OrderServiceService, private router: ActivatedRoute) {}

  userId: number = 0;
  model: serviceModel = new serviceModel();
  listar: Array<any> = new Array();
  produto: any = {}; // Definindo o tipo como objeto vazio

  ngOnInit(): void {
    this.userId = Number(this.router.snapshot.params['id']); // Converte o ID para número
    this.ListarProdutos();
  }

  ListarProdutos() {
    this.service.listar().subscribe(
      (L) => {
        this.listar = L;
        this.getProdutoPorId(this.userId);
      },
      (err) => console.log(err)
    );
  }

  getProdutoPorId(id: number) {
    const produto = this.listar.find((item) => item.id === id);
    if (produto) {
      console.log('Produto encontrado:', produto);
      this.produto = produto;
    } else {
      console.log('Produto não encontrado');
    }
  }
}
