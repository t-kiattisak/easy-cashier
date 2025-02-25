import { effect, Injectable, signal } from '@angular/core';
import { ProductItem } from '../../models/product-item.model';
import { AddProductUseCase } from '../../use-case/add-product.use-case';
import { SearchProductUseCase } from '../../use-case/search-product.use-case';
import { OrderItem } from '../../models/order-item.model';
import { GetProductsWithQtyUseCase } from '../../use-case/get-products-with-qty.use-case';

@Injectable({
  providedIn: 'root',
})
export class ProductProvider {
  constructor(
    private addProductUseCase: AddProductUseCase,
    private searchProductUseCase: SearchProductUseCase,
    private getProductsWithQtyUseCase: GetProductsWithQtyUseCase
  ) {
    effect(() => {
      this.loadProductsWithQty();
    });
  }

  products = signal<ProductItem[]>([]);
  searchProduct = signal<string>('');
  productsWithQty = signal<OrderItem[]>([]);

  loadProducts() {
    this.products.set(this.searchProductUseCase.getProducts());
    this.loadProductsWithQty();
  }

  loadProductsWithQty() {
    this.productsWithQty.set(
      this.getProductsWithQtyUseCase.execute(this.searchProduct())
    );
  }

  search(query: string) {
    this.searchProduct.set(query);
  }

  addProduct(product: ProductItem) {
    this.addProductUseCase.execute(product);
    this.loadProductsWithQty();
  }
}
