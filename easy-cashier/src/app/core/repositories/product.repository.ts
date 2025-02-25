import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-item.model';

@Injectable({
  providedIn: 'root',
})
export class ProductRepository {
  private products: ProductItem[] = [];

  addProduct(product: ProductItem) {
    this.products.push(product);
  }

  getProducts(): ProductItem[] {
    return this.products;
  }

  searchProduct(query: string): ProductItem[] {
    return this.products.filter((product) => product.name.includes(query));
  }
}
