import { Component } from '@angular/core';
import { ProductProvider } from '../../../core/services/providers/product.provider';
import { ButtonComponent } from '../../../core/components/button/button.component';
import { ModalComponent } from '../../../core/components/modal/modal.component';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [
    ButtonComponent,
    CommonModule,
    ModalComponent,
    AddProductFormComponent,
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  constructor(public productProvider: ProductProvider) {}
  open: boolean = false;

  openModal() {
    this.open = true;
  }

  closeModal() {
    this.open = false;
  }

  addProduct(data: { name: string; description: string; price: number }) {
    console.log('data', data);
    const uuid = new Date().getTime().toString();
    this.productProvider.addProduct({ ...data, id: uuid });
    this.closeModal();
    // this.productProvider.addProduct({
    //   description: 'xc',
    //   id: new Date().getTime().toString(),
    //   name: 'xxxxx',
    //   price: 0,
    // });
  }
}
