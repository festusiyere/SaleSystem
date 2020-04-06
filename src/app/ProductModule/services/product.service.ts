import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constants } from '../../Shared/interfaces/constants';
import { Observable } from 'rxjs';
import { Product } from '../../Shared/interfaces/product';
import { Record } from '../../Shared/interfaces/record';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = Constants.getApiUrl();
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('/api/product', product);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/product');
  }

  saveSale(data: Record): Observable<Record> {
    return this.http.post<Record>('/api/sale', data);
  }

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>('/api/product/' + id);
  }

}
