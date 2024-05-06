import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SearchComponent, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {}
