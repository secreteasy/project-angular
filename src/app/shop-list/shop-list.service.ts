import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopListService {
  private _baseUrl = 'http://localhost:3000/shops';

  constructor(private _http: HttpClient) {}

  getShops(): Observable<any> {
    return this._http.get<any>(`${this._baseUrl}/getAllShops`);
  }
}
