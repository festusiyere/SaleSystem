import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductSale } from '../../../Shared/interfaces/productSale';
import { Record } from '../../../Shared/interfaces/record';


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

  saveSales(data: Record): Observable<Record> {
    return this.http.post<Record>('/api/sale', data);
  }

  reverseSale(data: ProductSale): Observable<any> {
    return this.http.post<ProductSale>('/api/sale/reverse/' + data.id, data);
  }

  updateSale(data: ProductSale[]): Observable<any> {
    return this.http.post<ProductSale>('/api/sale/edit', data);
  }

  getPaginatedSale(pageNo: number = null): Observable<any> {

    const params = new HttpParams()
      .set('page', pageNo.toString());

    return this.http.get<ProductSale[]>('/api/sales', {params});
  }


}
