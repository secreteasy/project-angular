import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/auth';
  private currentUserSudject: BehaviorSubject<any>;
  public currentUser: Observable<any>;



  constructor(private http: HttpClient) {
    this.currentUserSudject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSudject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSudject.value;
  }


  login(email: string, password: string) {
    console.log('Login method called with:', email, password);
    return this.http
      .post<any>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        map((user) => {
          console.log('Response from server:', user);
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSudject.next(user);
          }
          return user;
        }),
        catchError((error) => {
          console.error('Login error:', error);
          return throwError(error);
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSudject.next(null);
  }

  getRole(): string {
    const role = this.currentUserValue?.role;
    console.log('User role:', role);
    return role;
  }

  isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }

  register(user: {
    firstName: string;
    userName: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  getUserId(): number {
    return this.currentUserValue?.id;
  }
}
