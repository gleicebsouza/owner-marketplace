import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    DetailsProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
