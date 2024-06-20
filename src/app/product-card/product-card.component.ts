import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, NgFor],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true, transform: numberAttribute }) id!: number;
  @Input() productName!: string;
  @Input() authors!: string[];
  @Input() company!: string;
  @Input() imgUrl!: string;
  @Input({ transform: numberAttribute }) price!: number;

  @HostBinding('class')
  class = 'product-card';

  @Output()
  view = new EventEmitter<void>();

  @Output()
  addToCart = new EventEmitter<void>();

  onAddToCart(): void {
    this.addToCart.emit();
  }
}
