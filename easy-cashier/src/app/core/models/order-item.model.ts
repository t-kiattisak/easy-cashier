import { ProductItem } from './product-item.model';

export interface OrderItem extends ProductItem {
  quantity: number;
}
