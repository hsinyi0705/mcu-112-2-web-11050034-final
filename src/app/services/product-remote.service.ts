import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductRemoteService extends ProductService {
  private readonly url = 'http://localhost:3000/product';

  private readonly httpClient = inject(HttpClient);

  override getById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/${productId}`);
  }

  override getList(productName: string | undefined, pageIndex: number, pageSize: number): Observable<Product[]> {
    const query: { [key: string]: string | number } = { _page: pageIndex, _limit: pageSize };
    if (productName) query['productName'] = productName;
    const params = new HttpParams({ fromObject: query });
    return this.httpClient.get<Product[]>(this.url, { params });
  }

  override getCount(productName?: string): Observable<number> {
    const option = productName ? { params: new HttpParams().set('productName', productName) } : {};
    return this.httpClient.get<Product[]>(this.url, option).pipe(map((data) => data.length));
  }
}
