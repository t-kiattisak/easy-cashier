import { Component } from '@angular/core';
import { OrderItem } from '../../../core/models/order-item.model';
import { OrderProvider } from '../../../core/services/providers/order.provider';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../core/components/button/button.component';
import { ProductProvider } from '../../../core/services/providers/product.provider';
import { ProductItem } from '../../../core/models/product-item.model';
import { CurrencyFormatPipe } from '../../../core/pipes/currency-format.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [CommonModule, ButtonComponent, CurrencyFormatPipe],
})
export class ProductListComponent {
  constructor(
    public productProvider: ProductProvider,
    public orderProvider: OrderProvider
  ) {
    this.productProvider.loadProducts();
    console.log('productsWithQty', this.productProvider.productsWithQty());
  }

  addToCart(product: OrderItem) {
    this.orderProvider.addToCart(product);
  }

  addToProduct(product: OrderItem) {
    this.productProvider.addProduct(product);
    console.log('addToProduct', this.productProvider.products());
  }

  // search(event: Event) {
  //   const query = (event.target as HTMLInputElement).value;
  //   this.productProvider.search(query);
  // }
}
