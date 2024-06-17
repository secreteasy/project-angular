import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ShopListService } from './shop-list/shop-list.service';
import { first } from 'rxjs';

interface Shop {
  id: number;
  name: string;
  description: string;
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
    private _shopService: ShopListService
  ){}

  openPageProducts(){
    this.router.navigate(['/product-list/3/products'])
  }
  shops: Shop[] = [];


  ngOnInit() {
    this.loadShops();
  }

  loadShops() {
    this._shopService.getShops().pipe(first()).subscribe((data: Shop[]) => {
      this.shops = data;
    });
  }
  viewProducts(shopId: number){
    this.router.navigate(['/product-list', shopId, 'products'])
  }
}
