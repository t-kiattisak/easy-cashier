import { Injectable, signal } from '@angular/core';
import { OrderItem } from '../../models/order-item.model';

@Injectable({
  providedIn: 'root',
})
export class OrderRepository {
  private _orders = signal<OrderItem[]>([]);

  get orders() {
    return this._orders();
  }

  setOrders(items: OrderItem[]) {
    this._orders.set(items);
  }

  addOrder(item: OrderItem) {
    const existingItem = this._orders().find((order) => order.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this._orders.set([...this._orders(), item]);
    }
  }
}
