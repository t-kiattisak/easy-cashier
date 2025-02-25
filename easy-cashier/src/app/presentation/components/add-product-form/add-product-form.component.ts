import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../../core/components/input/input.component';
import { ButtonComponent } from '../../../core/components/button/button.component';
import { InputNumberComponent } from '../../../core/components/input-number/input-number.component';
import { TextareaComponent } from '../../../core/components/textarea/textarea.component';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputComponent,
    ButtonComponent,
    InputNumberComponent,
    TextareaComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './add-product-form.component.html',
})
export class AddProductFormComponent {
  productName: string = '';
  description: string = '';
  price: number | null = null;

  productForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      price: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')],
      ],
    });
  }

  @Output() onClose: EventEmitter<void> = new EventEmitter();
  @Output() onCreate: EventEmitter<{
    name: string;
    description: string;
    price: number;
  }> = new EventEmitter();

  handleSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      const product = this.productForm.value;
      this.onCreate.emit({
        name: product['productName'],
        description: product['description'],
        price: product['price'],
      });
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  handleClose() {
    this.onClose.emit();
  }
}
