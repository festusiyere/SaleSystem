import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from './../interfaces/constants';
import { Observable } from 'rxjs';
import { Product } from './../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = Constants.getApiUrl();
  }

  saveProduct(product: Product): Observable<any> {
    return this.http.post<Product>('/api/product', product);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/product');
  }

  saveSale(data): Observable<any> {
    return this.http.post<any>('/api/sale', data);
  }

}
