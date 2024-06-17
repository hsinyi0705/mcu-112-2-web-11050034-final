import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from './../model/product';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  product!: Product;

  private productService = inject(ProductService);

  private router = inject(Router);

  ngOnInit(): void {
    this.productService.getById(this.id).subscribe((product) => (this.product = product));
  }

  onBack(): void {
    this.router.navigate(['products']);
  }
}
