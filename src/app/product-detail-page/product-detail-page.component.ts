import { CommonModule, CurrencyPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit, booleanAttribute, inject, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Product } from './../model/product';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe, NgIf, CommonModule, JsonPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  @Input({ transform: booleanAttribute })
  vendue!: boolean;

  product!: Product;

  private productService = inject(ProductService);

  private shoppingCartService = inject(ShoppingCartService);

  private router = inject(Router);

  ngOnInit(): void {
    this.productService.getById(this.id).subscribe((product) => (this.product = product));
  }

  onBack(): void {
    this.router.navigate(['products']);
  }

  addToCart(product: Product): void {
    this.shoppingCartService.addProduct(product);
  }
}
