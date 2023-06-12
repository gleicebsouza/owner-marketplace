import { Injectable } from '@angular/core';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:IProduct[] = [];

  constructor() { }

  /**Criar lógica para adicionar produtos ao carrinho
   * Criar métodos de addicionar,remover e obter informações
   */
}
