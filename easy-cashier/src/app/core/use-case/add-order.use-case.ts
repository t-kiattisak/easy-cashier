import { Injectable } from '@angular/core';
import { OrderItem } from '../models/order-item.model';
import { OrderRepository } from '../data/repositories/order.repository';

@Injectable({
  providedIn: 'root',
})
export class AddOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  execute(item: OrderItem) {
    this.orderRepository.addOrder({ ...item, quantity: 1 });
  }
}
