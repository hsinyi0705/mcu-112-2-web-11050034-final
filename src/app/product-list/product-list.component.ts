import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, numberAttribute } from '@angular/core';
import { Product } from '../model/product';
import { PaginationComponent } from '../pagination/pagination.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SearchComponent, ProductCardComponent, PaginationComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input({ required: true })
  products!: Product[];

  @Input({ required: true, transform: numberAttribute })
  totalCount!: number;

  @Input({ required: true, transform: numberAttribute })
  pageSize!: number;

  @Input({ required: true, transform: numberAttribute })
  pageIndex = 1;

  @Output()
  pageIndexChange = new EventEmitter<number>();

  @Output()
  view = new EventEmitter<Product>();

  @Output()
  addTo = new EventEmitter<Product>();

  onAddToCart(product: Product): void {
    this.addTo.emit(product);
  }
}
