/**Configurado a classe service, que vai ter acesso a lista de produtos;
 * Retorna a lista de produtos;
 * getOne: recebe o id do produto, o retorno será uma função que busca o produto */
import { IProduct, products } from './products';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:IProduct[] = products;
  //SERVER_URL= 'https://fakestoreapi.com/products/1';

  constructor ( private http:HttpClient ) {
   }
   public getProducts(){
    //return this.http.get(`${this.SERVER_URL}/produtos`);
   }

  getAll(){
    return this.products;
    //return this.getProducts;
  }
  getOne(productId:number){
    //Encontrar produto através da condição
    return this.products.find(productId => productId === productId)
  }
}
