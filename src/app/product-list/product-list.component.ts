import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { ProductListService } from './product-list.service';
import { first } from 'rxjs';
import { CategoryService } from '../product-admin/categories.service';

@Component({
  selector: 'product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    RouterOutlet,
  ],
})
export class ProductListComponent implements OnInit{
  shops: any[] = [];
  products: any[] = [];
  selectedShop: any[] = [];
  shopId: any;
  selectedCategory: string = '';

  constructor(
    private route: ActivatedRoute,
    private _Shops: ProductListService,
    private router: Router,
    private _categoryService: CategoryService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.shopId = this.route.snapshot.paramMap.get('shopId');
      this.selectedCategory = params.get('category') || '';
      if (this.selectedCategory) {
        this.loadProductsByCategory(this.selectedCategory);
      } else if (this.selectedShop) {
        this.loadProducts();
      }
    });
  }
  loadProducts() {
    console.log(`Loading products for shopId: ${this.shopId}`);
    this._Shops
      .getProductByShopId(this.shopId)
      .pipe(first())
      .subscribe(
        (data: any[]) => {
          console.log('Received products:', data);
          this.products = data;
        },
        (error) => {
          console.error('Failed to load products:', error);
        }
      );
  }

  loadProductsByCategory(category: string) {
    this._categoryService.getProductsByCategory(category).pipe(first()).subscribe(
      (data: any[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Failed to load products:', error);
      }
    );
  }

  openPageShopById() {
    this.router.navigate(['/product-list/:shopId/products']);
  }


}
