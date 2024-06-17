import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  products = [
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

  router = inject(Router);

  onView(product: Product): void {
    this.router.navigate(['product', product.id]);
  }
}
