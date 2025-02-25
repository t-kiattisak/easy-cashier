import { Component } from '@angular/core';
import { OrderProvider } from '../../../core/services/providers/order.provider';
import { InputNumberComponent } from '../../../core/components/input-number/input-number.component';
import { ButtonComponent } from '../../../core/components/button/button.component';
import { WithdrawalOptionComponent } from '../../../core/components/withdrawal-option/withdrawal-option.component';
import { CurrencyFormatPipe } from '../../../core/pipes/currency-format.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-summary',
  imports: [
    CommonModule,
    CurrencyFormatPipe,
    InputNumberComponent,
    ButtonComponent,
    WithdrawalOptionComponent,
  ],
  templateUrl: './payment-summary.component.html',
  styleUrl: './payment-summary.component.css',
})
export class PaymentSummaryComponent {
  constructor(public orderProvider: OrderProvider) {}

  receivedMoney: number | string = '';

  handleMoneyChange(value: string | number) {
    this.receivedMoney = Number(value);
  }

  calculateChange() {
    const money = Number(this.receivedMoney);
    const totalPrice = this.orderProvider.totalPrice();

    this.orderProvider.calculateChange(money, totalPrice);
  }
}
