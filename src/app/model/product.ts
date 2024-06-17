export class Product {
  constructor(initData?: Partial<Product>) {
    Object.assign(this, initData);
  }

  id!: number;

  productName!: string;

  authors!: string[];

  company!: string;

  imgUrl!: string;

  price!: number;
}
