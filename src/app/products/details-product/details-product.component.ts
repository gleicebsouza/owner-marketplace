import { NotificationService } from './../../notification.service';
/**Configurar rota para os detalhes dos produtos*/
import { ProductsService } from './../../products.service';
import { IProduct } from './../../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit{
  product:IProduct | undefined;
  quantity=1;

  constructor(
    private productsService:ProductsService,
    private route:ActivatedRoute,
    private notificationService:NotificationService
  ){}

  ngOnInit(): void { // configurar rotas
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('id'));
    
    this.product = this.productsService.getOne(productId);
  }
  addProductToCart(){
    this.notificationService.notify("Produto adicionado ao carrinho!");
  }


}
