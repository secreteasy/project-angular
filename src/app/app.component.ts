import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';

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
export class AppComponent {
openPageProductAdmin() {
throw new Error('Method not implemented.');
}
openPageShopList() {
throw new Error('Method not implemented.');
}
openPageShopAdmin() {
throw new Error('Method not implemented.');
}
  constructor(
    private router: Router
  ){}
   
  

  openPageProducts(){
    this.router.navigate(['/product-list'])
  }
}
