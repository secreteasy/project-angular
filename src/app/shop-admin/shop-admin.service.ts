import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopAdminservice {
  private _baseUrl = 'http://localhost:3000/shops';

  constructor(private _http: HttpClient) {}

  createShop(shop: {
    name: string;
    description: string;
    ownerName: string;
  }): Observable<any> {
    return this._http.post(`${this._baseUrl}/create`, shop);
  }

  deleteShop(id:number):Observable<void>{
    return this._http.delete<void>(`${this._baseUrl}/${id}`)
  }

  getShops(): Observable<any> {
    return this._http.get<any>(`${this._baseUrl}/getAllShops`);
  }
}
