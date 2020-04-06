import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductSale } from 'src/app/Shared/interfaces/productSale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  getSales(): Observable<ProductSale[]> {
    return this.http.get<ProductSale[]>('/api/sale');
  }

  getSale(id: number): Observable<ProductSale> {
    return this.http.get<ProductSale>('/api/sale/' + id);
  }

}
