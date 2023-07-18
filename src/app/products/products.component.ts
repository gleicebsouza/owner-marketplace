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
 //produtos:any;

 constructor(private productsService:ProductsService,
  ){}

  ngOnInit(): void {
    // Obter todos os produtos através de um serviço
    this.products = this.productsService.getAll();
}
}
