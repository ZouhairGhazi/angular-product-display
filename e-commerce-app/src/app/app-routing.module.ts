import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { OrderDetailComponent } from './order-detail/order-detail.component'
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'orders',component:OrdersComponent},
  {path:'users',component:UsersComponent},
  {path:'contact',component:ContactComponent},
  {path:'order-detail/:id',component:OrderDetailComponent},
  {path:'user-detail/:id',component:UserDetailComponent},
  {path:'product-detail/:id',component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
