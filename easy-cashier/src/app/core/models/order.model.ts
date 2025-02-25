import { OrderItem } from './order-item.model';

export interface Order {
  items: OrderItem[];
  totalItems: number;
  totalPrice: number;
}
