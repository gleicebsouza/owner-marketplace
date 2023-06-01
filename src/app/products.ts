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
  {id:1,name:"produto1", description:"produto1",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
  {id:1,name:"produto1", description:"produto1",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
  {id:2,name:"produto1", description:"produto1",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
 // {id:3,name:"produto2", description:"produto2",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
 // {id:4,name:"produto2", description:"produto2",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
  //{id:5,name:"produto3", description:"produto3",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
  //{id:6,name:"produto3", description:"produto3",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
]


