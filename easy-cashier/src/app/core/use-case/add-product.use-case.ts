import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-item.model';
import { ProductRepository } from '../repositories/product.repository';

@Injectable({
  providedIn: 'root',
})
export class AddProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  execute(product: ProductItem) {
    this.productRepository.addProduct(product);
  }
}
