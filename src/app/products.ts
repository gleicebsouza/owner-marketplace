/**Criado interface dos produtos para teste.Backend - api */

export interface IProduct{
  id:number;
  name:string;
  description:string;
  price:number;
  descriptionPrice:string;
  image:string;

}

export interface IProductCar extends IProduct{
  quantityItems:number;
}

export const products:IProduct[] = [
  {id:1,name:"Produto1", description:"produto1",price:10.00,descriptionPrice:"PIX",image:"/assets/download.jpeg"},
  {id:1,name:"Produto1", description:"produto1",price:10.00,descriptionPrice:"PIX",image:"/assets/download.jpeg"},
  {id:2,name:"Produto1", description:"produto1",price:10.00,descriptionPrice:"PIX",image:"/assets/download.jpeg"},
  //{id:3,name:"Produto2", description:"produto2",price:10.00,descriptionPrice:"PIX",image:"/assets/download.jpeg"},

]


