import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterOutlet } from '@angular/router';


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
    {
      name: 'Товар 3',
      image: 'assets/sample3.jpg',
      description: 'Описание товара 3',
      price: '3000 ₽',
    },
    {
      name: 'Товар 4',
      image: 'assets/sample3.jpg',
      description: 'Описание товара 4',
      price: '3000 ₽',
    },
    {
      name: 'Товар 5',
      image: 'assets/sample3.jpg',
      description: 'Описание товара 5',
      price: '3000 ₽',
    },
    {
      name: 'Товар 6',
      image: 'assets/sample3.jpg',
      description: 'Описание товара 6',
      price: '3000 ₽',
    },
    {
      name: 'Товар 7',
      image: 'assets/sample3.jpg',
      description: 'Описание товара 7',
      price: '3000 ₽',
    },
    {
      name: 'Товар 8',
      image: 'assets/sample3.jpg',
      description: 'Описание товара 8',
      price: '3000 ₽',
    },
    {
      name: 'Товар 9',
      image: 'assets/sample3.jpg',
      description: 'Описание товара 9',
      price: '3000 ₽',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
