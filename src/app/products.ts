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

export interface IProductCart extends IProduct{
  quantityItems:number;
}

export const products:IProduct[] = [
  {id:1,name:"Produto1", description:"Produto 1",price:10.00,descriptionPrice:"PIX",image:"/assets/download.jpeg",quantityItems:10},
  {id:2,name:"Produto2", description:"Produto 2",price:17.00,descriptionPrice:"PIX",image:"assets/download.jpeg",quantityItems:9},
  {id:3,name:"Produto3", description:"Produto 3",price:12.00,descriptionPrice:"PIX",image:"/assets/download.jpeg",quantityItems:10},
  {id:4,name:"Produto4", description:"produto 4",price:15.00,descriptionPrice:"PIX",image:"/assets/download.jpeg",quantityItems:10},
  {id:5,name:"Produto4", description:"produto 4",price:14.00,descriptionPrice:"PIX",image:"/assets/download.jpeg",quantityItems:10},
  {id:6,name:"Produto4", description:"produto 4",price:10.00,descriptionPrice:"PIX",image:"/assets/download.jpeg",quantityItems:10},
  {id:7,name:"Produto4", description:"produto 4",price:15.00,descriptionPrice:"PIX",image:"/assets/download.jpeg",quantityItems:10},
  {id:8,name:"Produto4", description:"produto 4",price:16.00,descriptionPrice:"PIX",image:"/assets/download.jpeg",quantityItems:10},
  {id:9,name:"Produto4", description:"produto 4",price:16.00,descriptionPrice:"PIX",image:"/assets/download.jpeg",quantityItems:10},
]


