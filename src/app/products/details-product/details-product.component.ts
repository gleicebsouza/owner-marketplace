
import { NotificationService } from './../../notification.service';
import { ProductsService } from './../../products.service';
import { IProduct, IProductCart, products } from './../../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CartService } from 'src/app/cart.service';


/**Configurar rota para os detalhes dos produtos*/
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
    private notificationService:NotificationService,
    private cartService:CartService,

    ){}

    ngOnInit(): void { // configurar rotas

      const routeParams = this.route.snapshot.paramMap;// parameters for route
      const productId = Number(routeParams.get('id')); // convert id to number

      this.product = this.productsService.getOne(productId);
  }
  addCart(){
    /**Método ao clicar no botão para notificar e adicionar produto ao carrinho */
    this.notificationService.notify("Produto adicionado ao carrinho!");
    const product:IProductCart={
      ...this.product!,
      quantityItems:this.quantity
    }
    this.cartService.addCart(product);
  }


}
