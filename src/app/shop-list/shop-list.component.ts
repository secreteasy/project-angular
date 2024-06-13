import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ShopListService } from './shop-list.service';
import { first } from 'rxjs';

interface Shop {
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'shop-list',
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
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css',
})
export class ShopListComponent  {
  constructor(private router: Router, private _Shops: ShopListService) {}
  openPageShopList() {
    this.router.navigate(['/shop-list']);
  }
  shops: Shop[] = [];

  ngOnInit() {
    this.loadShops();
  }

  loadShops() {
    this._Shops
      .getShops()
      .pipe(first())
      .subscribe((data: Shop[]) => {
        this.shops = data;
      });
  }
}
