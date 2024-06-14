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
export class ProductListComponent {
  productName = 'A 產品';
  authors = '作者A、作者B、作者C';
  company = '博碩文化';
  imgUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';
  price = 1580;
}
