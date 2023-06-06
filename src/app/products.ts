/**Criado interface dos produtos para teste.Backend - api */

export interface IProduct{
  id:number;
  name:string;
  description:string;
  price:number;
  descriptionPrice:string;
  image:string;
  quantityItems:number;

}

export interface IProductCar extends IProduct{
  quantityItems:number;
}

export const products:IProduct[] = [
  {id:1,name:"Produto1", description:"Produto 1",price:10.00,descriptionPrice:"PIX",image:"/assets/download.jpeg",quantityItems:10},
  {id:2,name:"Produto1", description:"Produto 2",price:10.00,descriptionPrice:"PIX",image:"assets/download.jpeg",quantityItems:9},
  {id:3,name:"Produto1", description:"Produto 3",price:10.00,descriptionPrice:"PIX",image:"/assets/produto1.jpeg",quantityItems:10},
  //{id:3,name:"Produto2", description:"produto2",price:10.00,descriptionPrice:"PIX",image:"/assets/download.jpeg"},
]


