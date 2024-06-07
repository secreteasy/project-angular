import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

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
  styleUrl: './shop-list.component.css'
})
export class ShopListComponent {
  constructor(
    private router: Router
  ){}
  openPageShopList(){
    this.router.navigate(['/shop-list'])
  }
  shops = [
    {
      name: 'Aliexpress',
      image: 'assets/sample1.jpg',
      description: 'Описание магазина'
    },
    {
      name: 'WB',
      image: 'assets/sample2.jpg',
      description: 'Описание магазина'
    },
    {
      name: 'Ozon',
      image: 'assets/sample3.jpg',
      description: 'Описание магазина'
    },
    {
      name: 'KazanExpress',
      image: 'assets/sample4.jpg',
      description: 'Описание магазина'
    },
  ]
}
