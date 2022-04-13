import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProducthomeComponent } from './producthome/producthome.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProducthomeComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ProductdetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductRoutingModule { }
