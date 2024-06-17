import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ShopListService } from './shop-list/shop-list.service';
import { first } from 'rxjs';
import { ProductAdminService } from './product-admin/product-admin.service';
import { ProductListService } from './product-list/product-list.service';
import { CategoryService } from './product-admin/categories.service';

interface Shop {
  id: number;
  name: string;
  description: string;
}
interface Category{
  category: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router,
    private _shopService: ShopListService,
    private _categoryService: CategoryService,
  ){}

  openPageProducts(){
    this.router.navigate(['/product-list/3/products'])
  }
  shops: Shop[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  products: any[] = [];

  ngOnInit() {
    this.loadShops();
    this.loadCategories();
  }

  loadShops() {
    this._shopService.getShops().pipe(first()).subscribe((data: Shop[]) => {
      this.shops = data;
    });
  }

  loadCategories() {
    this._categoryService.getCategories().subscribe(
      (data: string[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Failed to load categories:', error);
      }
    );
  }

  loadProductsByCategory(category: string) {
    this.router.navigate(['/product-list/category', category]);
  }

  viewProducts(shopId: number){
    this.router.navigate(['/product-list/shop', shopId, 'products'])
  }
}
