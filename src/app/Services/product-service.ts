import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../Constants/api_urls';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private httpClient = inject(HttpClient);

  getProductByID(prodID: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${API_URLS.getSingleProduct}/${prodID}`);
  }

  GetAllProducts(): Observable<any> {
    return this.httpClient.get<any>(API_URLS.getAllProducts);
  }

  getProductsByCatID(category: string): Observable<any> {
    return this.httpClient.get<any>(`${API_URLS.getCategoriesProducts}/${category}`);
  }

  GetCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(API_URLS.getCategories);
  }

  GetCategoryName(cat: string): string {
    return cat ? cat : '';
  }
}
