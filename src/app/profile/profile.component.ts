import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ProfileServcie } from './profile.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [DatePipe],
})
export class ProfileComponent implements OnInit {
  user: any;
  purchases: any[] = [];
  datePipe: any;

  constructor(
    private authService: AuthService,
    private profileService: ProfileServcie
  ) {}

  // ngOnInit(){
  //   const currentUser = this.authService.currentUserValue;
  //   if(currentUser){
  //     this.profileService.getUserProfile(currentUser.id).subscribe(user =>{
  //       this.user = user;
  //     });

  //     this.profileService.getUserPurchases(currentUser.id).subscribe(purchases =>{
  //       this.purchases = purchases;
  //     })
  //   }
  // }

  ngOnInit(): void {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.id) {
      this.profileService.getUserProfile(currentUser.id).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          console.error('Error fetching user profile:', error);
        }
      );

      this.profileService.getUserPurchases(currentUser.id).subscribe(
        (data) => {
          this.purchases = data;
        },
        (error) => {
          console.error('Error fetching user purchases:', error);
        }
      );
    }
  }

  formatDate(date: string): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }
}
