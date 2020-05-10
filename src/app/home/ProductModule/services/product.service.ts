import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Constants } from '../../../Shared/interfaces/constants';
import { Observable } from 'rxjs';
import { Product } from '../../../Shared/interfaces/product';
import { Record } from '../../../Shared/interfaces/record';

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

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>('/api/product/' + id);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<Product>('/api/product/' + id);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>('/api/product/' + product.id, product);
  }

  EditProduct(product: Product): Observable<Product> {
    return this.http.put<Product>('api/products/' + product.id, product);
  }

  getPaginatedProducts(pageNo: number = null): Observable<any> {

    const params = new HttpParams()
      .set('page', pageNo.toString());

    return this.http.get<Product[]>('/api/products', {params});
  }

}
