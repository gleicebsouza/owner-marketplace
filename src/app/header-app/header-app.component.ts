import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css']
})
export class HeaderAppComponent implements OnInit{
//Injetar serviço de carrinho 
  constructor(public CartService:CartService){}

  ngOnInit(): void {

  }

}
