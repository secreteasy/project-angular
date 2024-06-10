import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'register',
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
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    userName: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required]
    }),
    password: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required]
    }),
    email: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required]
    }),
    firstName: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required]
    })
  })

  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      
    }
  }

  constructor(
    private router: Router
  ) {}
  openPageregister(){
    this.router.navigate(['/register'])
  }
}
