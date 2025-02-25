import { computed, Injectable, signal } from '@angular/core';
import { OrderItem } from '../../models/order-item.model';
import { RemoveProductUseCase } from '../../use-case/remove-product.use-case';
import { UpdateQuantityUseCase } from '../../use-case/update-quantity.use-case';
import { OrderRepository } from '../../data/repositories/order.repository';
import { CalculateChangeUseCase } from '../../use-case/calculate-change.use-case';
import { WithdrawalOption } from '../../models/withdrawal-option.model';
import { AddOrderUseCase } from '../../use-case/add-order.use-case';

@Injectable({
  providedIn: 'root',
})
export class OrderProvider {
  orders = computed(() => this.orderRepository.orders);

  totalItems = computed(() =>
    this.orders().reduce((sum, item) => sum + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this.orders().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  change: number | null = null;
  withdrawalOptions: WithdrawalOption[][] = [];

  constructor(
    private orderRepository: OrderRepository,
    private updateQuantityUseCase: UpdateQuantityUseCase,
    private removeProductUseCase: RemoveProductUseCase,
    private calculateChangeUseCase: CalculateChangeUseCase,
    private addOrderUseCase: AddOrderUseCase
  ) {}

  addToCart(item: OrderItem) {
    this.addOrderUseCase.execute(item);
  }

  removeProduct(itemId: string) {
    this.removeProductUseCase.execute(itemId);
  }

  updateQuantity(itemId: string, quantity: number) {
    this.updateQuantityUseCase.execute(itemId, quantity);
  }

  calculateChange(money: number, totalPrice: number): void {
    const result = this.calculateChangeUseCase.execute(money, totalPrice);
    this.change = result.change;
    this.withdrawalOptions = result.withdrawalOptions;
  }
}
