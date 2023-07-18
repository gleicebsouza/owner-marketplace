import { RouterModule } from '@angular/router';
import { IProduct, IProductCart } from './../products';
import { CartService } from 'src/app/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  itemsCart:IProductCart[] = [];
  total= 0;

  constructor(
    public CartService:CartService){
  }
  ngOnInit(): void {
    this.itemsCart =this.CartService.getCart();

  }
  calcTotal(){
    this.total= this.itemsCart.reduce((prev,curr)=>prev + (curr.price * curr.quantityItems),0);

  }

  removeProductCart(productId:number){
    this.itemsCart = this.itemsCart.filter(items => items.id !== productId);
    this.CartService.removeProductCart(productId);
    this.calcTotal();
  }
  buy(){
    alert("parabéns");
    this.CartService.clearCart();
    this.router.navigate(["products"]);
  }
}

