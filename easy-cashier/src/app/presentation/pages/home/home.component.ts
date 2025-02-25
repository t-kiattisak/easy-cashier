import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { InputComponent } from '../../../core/components/input/input.component';
import { ProductProvider } from '../../../core/services/providers/product.provider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ProductListComponent, InputComponent],
})
export class HomeComponent {
  constructor(public productProvider: ProductProvider) {}

  onSearch(value: string | number) {
    this.productProvider.search(value.toString());
  }
}
