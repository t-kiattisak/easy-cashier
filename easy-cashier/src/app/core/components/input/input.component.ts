import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { twMerge as cn } from 'tailwind-merge';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() error: boolean = false;

  @Output() valueChange: EventEmitter<string | number> = new EventEmitter();

  private innerValue: string | number = '';
  private onChange: (value: string | number) => void = () => {};
  private onTouched: () => void = () => {};

  get value(): string | number {
    return this.innerValue;
  }

  set value(value: string | number) {
    this.innerValue = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  onInputChange(value: string | number) {
    this.value = value;
  }

  writeValue(value: string | number): void {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: string | number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  getClass(): string {
    return cn(
      'w-full px-4 py-2 rounded-md border border-border-gray text-white bg-black focus:outline-none focus:ring-0',
      this.error ? 'border-primary-red border' : ''
    );
  }
}
