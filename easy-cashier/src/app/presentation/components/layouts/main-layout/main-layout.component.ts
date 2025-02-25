import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrentOrderComponent } from '../../current-order/current-order.component';
import { PaymentSummaryComponent } from '../../payment-summary/payment-summary.component';
import { BannerComponent } from '../../banner/banner.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
  imports: [
    RouterModule,
    CurrentOrderComponent,
    PaymentSummaryComponent,
    BannerComponent,
  ],
})
export class MainLayoutComponent {}
