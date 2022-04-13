import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProducthomeComponent } from './producthome/producthome.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProductComponent, ProducthomeComponent, ProductdetailComponent]
})
export class ProductModule { }
