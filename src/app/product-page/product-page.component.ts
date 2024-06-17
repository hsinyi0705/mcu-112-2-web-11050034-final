import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../services/product.services';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  router = inject(Router);

  private productService = inject(ProductService);

  products!: Product[];

  ngOnInit(): void {
    this.productService.getList().subscribe((products) => (this.products = products));
  }

  onView(product: Product): void {
    this.router.navigate(['product', product.id]);
  }
}
