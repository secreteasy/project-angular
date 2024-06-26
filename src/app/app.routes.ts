import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { ShopListComponent } from './shop-list/shop-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShopAdminComponent } from './shop-admin/shop-admin.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { PurchaseManagementComponent } from './purchase-management/purchase-management.component';

export const routes: Routes = [
  { path:'', redirectTo: '/shop-list', pathMatch:'full' },
  { path: 'product-list/shop/:shopId/products', component: ProductListComponent },
  { path: 'shop-list', component: ShopListComponent },
  { path: 'shop-admin', component:ShopAdminComponent },
  { path: 'product-admin', component:ProductAdminComponent },
  { path: 'auth', component:AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product-list/category/:category', component: ProductListComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['user'] } },
  { path: 'profile', component: ProfileComponent },
  { path: 'purchase-management', component: PurchaseManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
