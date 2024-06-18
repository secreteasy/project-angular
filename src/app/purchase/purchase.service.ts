import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class PurchaseService{
    private _baseUrl = 'http://localhost:3000';

    constructor (private _http: HttpClient){}

    createPurchase(purchaseData: any): Observable<any>{
        return this._http.post(`${this._baseUrl}/purchases/createPurchase`, purchaseData)
    }
}