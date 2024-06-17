import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class ProductAdminService{
    private _baseUrl = 'http://localhost:3000/products';

    constructor (private _http: HttpClient){}

    createProduct(product: { name:string; description: string; shopName: string; price: string  }): Observable<any>{
        return this._http.post(`${this._baseUrl}/createProduct`,product)
    }

    deleteProduct(id:number):Observable<void>{
        return this._http.delete<void>(`${this._baseUrl}/${id}`)
    }

    getProducts():Observable<any>{
        return this._http.get<any>(`${this._baseUrl}/findAll`)
    }
}