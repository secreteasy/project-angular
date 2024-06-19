import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileServcie {
  private _baseUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient, private authService: AuthService) {}

//   getUserProfile(id: number): Observable<any>{
//     return this._http.get<any>(`${this._baseUrl}/user/${id}`)
//   }

//   getUserPurchases(userId: number):Observable<any>{
//     return this._http.get<any>(`${this._baseUrl}/purchases/${userId}`)
//   }
getUserProfile(id: number): Observable<any> {
    const token = this.authService.currentUserValue?.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get<any>(`${this._baseUrl}/user/${id}`, { headers });
  }

  getUserPurchases(userId: number): Observable<any[]> {
    const token = this.authService.currentUserValue?.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get<any[]>(`${this._baseUrl}/user/${userId}/purchases`, { headers });
  }

}
