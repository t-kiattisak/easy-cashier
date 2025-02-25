import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { twMerge as cn } from 'tailwind-merge';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true,
    },
  ],
})
export class InputNumberComponent implements ControlValueAccessor, OnChanges {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() error: boolean = false;

  @Input() value: string | number = '';

  @Output() valueChange: EventEmitter<string | number> = new EventEmitter();

  private innerValue: string = '';
  private onChange: (value: string | number) => void = () => {};
  onTouched: () => void = () => {};

  get currentValue(): string {
    return this.innerValue;
  }

  set currentValue(value: string) {
    this.innerValue = value;
    this.onChange(this.parseValue(value));
    this.valueChange.emit(this.parseValue(value));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && changes['value'].currentValue !== undefined) {
      const newValue = changes['value'].currentValue;
      this.innerValue = String(newValue);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    const isNumber = /^[0-9]$/.test(event.key);

    if (!isNumber && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (/^[0-9]*$/.test(value) || value === '') {
      this.currentValue = value;
    }
  }

  parseValue(value: string): string | number {
    return value === '' ? '' : /^[0-9]+$/.test(value) ? Number(value) : value;
  }

  writeValue(value: string | number): void {
    this.innerValue = String(value);
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
