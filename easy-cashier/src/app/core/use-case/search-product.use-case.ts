import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-item.model';
import { ProductRepository } from '../repositories/product.repository';

@Injectable({
  providedIn: 'root',
})
export class SearchProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  execute(query: string): ProductItem[] {
    return this.productRepository.searchProduct(query);
  }

  getProducts(): ProductItem[] {
    return this.productRepository.getProducts();
  }
}
