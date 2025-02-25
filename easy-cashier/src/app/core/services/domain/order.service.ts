import { Injectable } from '@angular/core';
import { OrderItem } from '../../models/order-item.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  addOrderItem(items: OrderItem[], item: OrderItem): OrderItem[] {
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      return [...items];
    } else {
      return [...items, { ...item, quantity: 1 }];
    }
  }

  removeOrderItem(items: OrderItem[], itemId: string): OrderItem[] {
    return items.filter((item) => item.id !== itemId);
  }

  updateOrderItemQuantity(
    items: OrderItem[],
    itemId: string,
    quantity: number
  ): OrderItem[] {
    const item = items.find((i) => i.id === itemId);
    if (item && quantity > 0) {
      item.quantity = quantity;
    }
    return [...items];
  }

  calculateTotal(items: OrderItem[]): {
    totalItems: number;
    totalPrice: number;
  } {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return { totalItems, totalPrice };
  }
}
