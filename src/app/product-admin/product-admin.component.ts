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

interface Product {
  name: string;
  image: string;
  description: string;
  price: number;
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
  });
  products: Product[] = [];

  constructor(private router: Router) {

  }

  onSubmit() {
    if (this.productForm.valid) {
      const formValue = this.productForm.getRawValue()
      const product: Product = {
        ...formValue,
        price: parseFloat(formValue.price)
      }
      this.products.push(product);
      this.productForm.reset();
    }
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  openPageProductAdmin() {
    this.router.navigate(['/product-admin']);
  }
}
