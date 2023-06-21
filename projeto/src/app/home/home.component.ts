import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../service/order-service.service';
import { serviceModel } from '../service/serviceModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
OrderServiceService
serviceModel
ActivatedRoute
Observable
switchMap

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: OrderServiceService, private router: ActivatedRoute) {}

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

}
