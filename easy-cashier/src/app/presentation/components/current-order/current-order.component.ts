import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItem } from '../../../core/models/order-item.model';
import { OrderProvider } from '../../../core/services/providers/order.provider';
import { CurrencyFormatPipe } from '../../../core/pipes/currency-format.pipe';
import { InputNumberComponent } from '../../../core/components/input-number/input-number.component';
import { ButtonComponent } from '../../../core/components/button/button.component';
import { WithdrawalOptionComponent } from '../../../core/components/withdrawal-option/withdrawal-option.component';

@Component({
  selector: 'app-current-order',
  imports: [CommonModule, CurrencyFormatPipe],
  templateUrl: './current-order.component.html',
  styleUrl: './current-order.component.css',
})
export class CurrentOrderComponent {
  constructor(public orderProvider: OrderProvider) {}
}
