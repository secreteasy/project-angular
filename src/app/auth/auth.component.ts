// auth.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { first } from 'rxjs/operators';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'auth',
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
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(private router: Router, private _authService: AuthService) {}

  ngOnInit(): void {}

  openPageAuth() {
    this.router.navigate(['/auth']);
  }

  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  // onSubmit() {
  //   console.log("submit");

  //   if (this.authForm.valid) {
  //     this._authService
  //       .login(
  //         this.authForm.controls.email.value,
  //         this.authForm.controls.password.value
  //       )
  //       .pipe(first())
  //       .subscribe();
  //   }
  // }

  onSubmit() {
    console.log("submit");
  
    if (this.authForm.valid) {
      console.log('Form is valid, calling login...');
      this._authService
        .login(
          this.authForm.controls.email.value,
          this.authForm.controls.password.value
        )
        .pipe(first())
        .subscribe({
          next: (data) => {
            console.log('Login successful:', data);
            const role = this._authService.getRole();
            if (role === 'admin') {
              this.router.navigate(['/admin']);
            } else if (role === 'user') {
              this.router.navigate(['/user']);
            }
          },
          error: (error) => {
            console.error('Login failed:', error);
          }
        });
    }
  }

  register() {}
}
