import { Injectable } from '@angular/core';
import { OrderRepository } from '../data/repositories/order.repository';
import { OrderService } from '../services/domain/order.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateQuantityUseCase {
  constructor(
    private orderRepository: OrderRepository,
    private orderService: OrderService
  ) {}

  execute(productId: string, quantity: number) {
    const currentOrders = this.orderRepository.orders;
    const updatedOrders = this.orderService.updateOrderItemQuantity(
      currentOrders,
      productId,
      quantity
    );
    this.orderRepository.setOrders(updatedOrders);
  }
}
