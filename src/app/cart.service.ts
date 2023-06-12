import { Injectable } from '@angular/core';
import { IProduct, IProductCart } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:IProductCart[] = [];

  constructor() { }

  /**Criar lógica para adicionar produtos ao carrinho
   * Criar métodos de adicionar,remover e obter informações
   * Armazenar informações dentro do localStorage
   */
  getCart(){
    const cart = JSON.parse(localStorage.getItem('cart') || "");
    return cart;
  }
  addCart(product:IProductCart){
    /**Acrescentar o novo produto dentro do carrinho.
     * Salvar os produtos dentro do localstorage, converter de um objeto para string  */
    this.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.items));

  }
  clearCart(){
    this.items = [];
    localStorage.clear();
  }


}
