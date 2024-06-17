import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ProductAdminService } from './product-admin.service';
import { first } from 'rxjs';

interface Product {
  shopName: string;
  id?: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

@Component({
  selector: 'product-admin',
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
  templateUrl: './product-admin.component.html',
  styleUrl: './product-admin.component.css',
})
export class ProductAdminComponent {
  productForm = new FormGroup({
    name: new FormControl('', {
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
    price: new FormControl('',{
      nonNullable: true,
      validators:[Validators.required]
    }),
    shopName: new FormControl('',{
      nonNullable: true,
      validators:[Validators.required]
    }),
  });
  products: Product[] = [];

  constructor(private router: Router,
    private _productAdmin: ProductAdminService
  ) {

  }

  onSubmit() {
    console.log("submit");
    
    if (this.productForm.valid) {
      this._productAdmin.createProduct({
        name: this.productForm.controls.name.value,
        description: this.productForm.controls.description.value,
        shopName: this.productForm.controls.shopName.value,
        price: this.productForm.controls.price.value,
      }).pipe(first()).subscribe((newProduct: Product)=>{
        this.products.push(newProduct);
        this.productForm.reset();
      }
    );
      
    }
  }

  deleteProduct(productId: number) {
    this._productAdmin.deleteProduct(productId).pipe(first()).subscribe(()=> {
      this.products = this.products.filter(p => p.id !== productId);
    });
  }

  openPageProductAdmin() {
    this.router.navigate(['/product-admin']);
  }



  ngOnInit(){
    this.loadProducts()
  }

  loadProducts(){
    this._productAdmin.getProducts().pipe(first()).subscribe((data: Product[])=>{
      this.products = data;
    })
  }
}
