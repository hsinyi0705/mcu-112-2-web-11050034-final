import { Product } from './product';

export class ShoppingItem {
  constructor(initData?: Partial<ShoppingItem>) {
    Object.assign(this, initData);
  }

  id!: number;

  count!: number;

  product!: Product;
}
