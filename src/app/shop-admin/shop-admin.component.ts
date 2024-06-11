import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ShopAdminservice } from './shop-admin.service';
import { first } from 'rxjs';


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
  shopForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    ownerId: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    image: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
  })
  shops: Shop[] = [];

  constructor(
    private router: Router,
    private _shopAdmnin: ShopAdminservice
  ){
  }

  onSubmit(){
    if(this.shopForm.valid){
      this._shopAdmnin.createShop({
        name: this.shopForm.controls.name.value,
        description: this.shopForm.controls.description.value,
        ownerId: this.shopForm.controls.ownerId.value
      }).pipe(first()).subscribe();
      const shop: Shop = this.shopForm.getRawValue();
      this.shops.push(shop);
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
