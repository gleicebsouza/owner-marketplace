
export interface IProduto{
  id:number;
  description:string;
  price:number;
  descriptionPrice:string;
  image:string;

}

export interface IProdutoCarrinho extends IProduto{
  quantityItems:number;
}

export const products =[
  {id:1, description:"produto1",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
  {id:2, description:"produto1",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
  {id:3, description:"produto2",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
  {id:4, description:"produto2",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
  {id:5, description:"produto3",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
  {id:6, description:"produto3",price:10.00,descriptionPrice:"PIX",image:"./src/assets/imagem1.jpg"},
]


