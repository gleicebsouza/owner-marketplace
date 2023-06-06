/**Configurar rota para os detalhes dos produtos*/
import { ProductsService } from './../../products.service';
import { IProduct } from './../../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit{
  products:IProduct[] | undefined;
  quantidade=1;

  constructor(
    private ProductsService:ProductsService,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void { // configurar rotas
    const routeParams = this.route.snapshot.paramMap;
    const productsId = Number(routeParams.get('id'));
    //this.product = this.productsService.getOne(productId);

  }
}
