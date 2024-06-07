import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


interface Shop {
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'shop-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbar,
  ],
  templateUrl: './shop-admin.component.html',
  styleUrl: './shop-admin.component.css'
})
export class ShopAdminComponent {
  shopForm: FormGroup;
  shops: Shop[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder
  ){
    this.shopForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      description:['',Validators.required]
    });
  }

  onSubmit(){
    if(this.shopForm.valid){
      this.shops.push(this.shopForm.value);
      this.shopForm.reset();
    }
  }

  deleteShop(shop: Shop){
    const index = this.shops.indexOf(shop);
    if(index > -1){
      this.shops.splice(index, 1);
    }
  }

  openPageShopAdmin(){
    this.router.navigate(['/shop-admin'])
  }

  
}
