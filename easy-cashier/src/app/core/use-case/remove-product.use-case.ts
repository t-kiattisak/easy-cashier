import { Injectable } from '@angular/core';
import { OrderService } from '../services/domain/order.service';
import { OrderRepository } from '../data/repositories/order.repository';

@Injectable({
  providedIn: 'root',
})
export class RemoveProductUseCase {
  constructor(
    private orderRepository: OrderRepository,
    private orderService: OrderService
  ) {}

  execute(productId: string) {
    const currentOrders = this.orderRepository.orders;
    const updatedOrders = this.orderService.removeOrderItem(
      currentOrders,
      productId
    );
    this.orderRepository.setOrders(updatedOrders);
  }
}
