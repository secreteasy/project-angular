import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [
    
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
  ],
})
export class ProductListComponent {
  products = [
    {
      name: 'Товар 1',
      image: 'assets/sample1.jpg',
      description: 'Описание товара 1',
      price: '1000 ₽',
    },
    {
      name: 'Товар 2',
      image: 'assets/sample2.jpg',
      description: 'Описание товара 2',
      price: '2000 ₽',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
