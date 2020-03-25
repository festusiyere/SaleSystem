import { Product } from './product';

export interface Cart {
  index?: number;
  product: Product;
  quantity: number;
  discount?: number;
  total: number;
}
