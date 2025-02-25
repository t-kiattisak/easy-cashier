import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-withdrawal-option',
  imports: [],
  templateUrl: './withdrawal-option.component.html',
  styleUrl: './withdrawal-option.component.css',
})
export class WithdrawalOptionComponent {
  @Input() coin!: number;
  @Input() quantity!: number;

  getCoinImage() {
    return `/coins/COIN-${this.coin}.svg`;
  }
}
