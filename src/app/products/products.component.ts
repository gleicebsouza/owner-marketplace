/**Configurar lista produtos.Obter produtos,requisições através de serviço */
import { ProductsService } from '../products.service';
import { IProduct } from './../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products: IProduct[]| undefined;

 constructor(private productsService:ProductsService){}

  ngOnInit(): void {
    this.products = this.productsService.getAll();

  }
}
