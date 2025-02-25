import { Injectable } from '@angular/core';
import { ProductItem } from '../../models/product-item.model';

@Injectable({
  providedIn: 'root',
})
export class ProductRepositoryImpl {
  products: ProductItem[] = [];

  addProduct(product: ProductItem): void {
    this.products.push(product);
  }

  searchProduct(query: string): ProductItem[] {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  getProducts(): ProductItem[] {
    return this.products;
  }
}
