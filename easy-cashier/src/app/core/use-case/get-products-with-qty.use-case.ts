import { Injectable } from '@angular/core';
import { ProductRepository } from '../repositories/product.repository';
import { OrderRepository } from '../data/repositories/order.repository';
import { OrderItem } from '../models/order-item.model';

@Injectable({
  providedIn: 'root',
})
export class GetProductsWithQtyUseCase {
  constructor(
    private productRepository: ProductRepository,
    private orderRepository: OrderRepository
  ) {}

  execute(search: string): OrderItem[] {
    const products = this.productRepository.searchProduct(search);
    const orders = this.orderRepository.orders;

    return products.map((product) => {
      const quantity =
        orders.find((order) => order.id === product.id)?.quantity ?? 0;
      return { ...product, quantity };
    });
  }
}
