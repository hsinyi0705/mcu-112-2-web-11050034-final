import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data = [
    new Product({
      id: 1,
      productName: 'A 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text:img',
      price: 1580,
    }),
    new Product({
      id: 2,
      productName: 'B 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text:img',
      price: 1580,
    }),
    new Product({
      id: 3,
      productName: 'C 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text:img',
      price: 1580,
    }),
    new Product({
      id: 4,
      productName: 'D 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text:img',
      price: 1580,
    }),
    new Product({
      id: 5,
      productName: 'E 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text:img',
      price: 1580,
    }),
  ];

  getById(productId: number): Product {
    return this._data.find(({ id }) => id === productId)!;
  }

  getList(): Observable<Product[]> {
    return of(this._data).pipe(delay(2000));
  }
}
