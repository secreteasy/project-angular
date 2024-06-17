import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
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
import { ShopAdminservice } from './shop-admin.service';
import { BehaviorSubject, first, tap } from 'rxjs';

interface Shop {
  id?: number;
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
  styleUrl: './shop-admin.component.css',
})
export class ShopAdminComponent implements OnInit, OnDestroy {
  shopForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    ownerName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    image: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  shops$ = new BehaviorSubject<Shop[]>([]);

  constructor(
    private router: Router,
    private _shopAdmnin: ShopAdminservice
  ) {}

  onSubmit() {
    if (this.shopForm.valid) {
      this._shopAdmnin
        .createShop({
          name: this.shopForm.controls.name.value,
          description: this.shopForm.controls.description.value,
          ownerName: this.shopForm.controls.ownerName.value,
        })
        .pipe(first())
        .subscribe(() => {
          this.loadShops();
          this.shopForm.reset();
        });
      const shop: Shop = this.shopForm.getRawValue();
    }
  }

  deleteShop(shopId: number) {
    this._shopAdmnin
      .deleteShop(shopId)
      .pipe(first())
      .subscribe(() => {
        this.shops$.next(this.shops$.value.filter((s) => s.id !== shopId));
      });
  }

  openPageShopAdmin() {
    this.router.navigate(['/shop-admin']);
  }

  ngOnInit() {
    this.loadShops();
  }

  ngOnDestroy(): void {
    this.shops$.complete();
  }

  loadShops() {
    this._shopAdmnin
      .getShops()
      .pipe(first(), tap(console.log))
      .subscribe((data: Shop[]) => {
        this.shops$.next(data);
      });
  }
}
