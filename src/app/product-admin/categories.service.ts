import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _productUrl = 'http://localhost:3000/products';

  constructor(private _http: HttpClient) {}

  getCategories(): Observable<any> {
    return this._http.get<string[]>(`${this._productUrl}/categories`);
  }
  getProductsByCategory(category: string):Observable<any[]>{
    return this._http.get<any[]>(`${this._productUrl}/category/${category}`)
  }
}
