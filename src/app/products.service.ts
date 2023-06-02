/**Configurado a classe service, que vai ter acesso a lista de produtos;
 * Retorna a lista de produtos;
 * getOne: recebe o id do produto, o retorno será uma função que busca o produto */
import { IProduct, products } from './products';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:IProduct[] = products;

  constructor() { }

  getAll(){
    return this.products;
  }
  getOne(productId:number){
    return this.products.find(productId => productId === productId)

  }
}
