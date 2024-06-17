import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';
import { PaginationComponent } from '../pagination/pagination.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SearchComponent, ProductCardComponent, PaginationComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input({ required: true })
  products!: Product[];

  pageIndex = 1;

  @Output()
  view = new EventEmitter<Product>();
}
