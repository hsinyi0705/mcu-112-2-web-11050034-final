import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, startWith, switchMap } from 'rxjs';

import { Product } from '../model/product';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [AsyncPipe, ProductListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  router = inject(Router);

  private productService = inject(ProductService);

  private readonly refresh$ = new Subject<void>();

  protected pageSize = 5;

  pageIndex = 1;

  readonly products$ = this.refresh$.pipe(
    startWith(undefined),
    switchMap(() => this.productService.getList(undefined, 1, 5))
  );

  readonly totalCount$ = this.refresh$.pipe(
    startWith(undefined),
    switchMap(() => this.productService.getCount())
  );

  onView(product: Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }
}
