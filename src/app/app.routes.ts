import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { ShopListComponent } from './shop-list/shop-list.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
  { path:'', redirectTo: '/shop-list', pathMatch:'full' },
  { path: 'product-list', component: ProductListComponent },
  { path: 'shop-list', component: ShopListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
