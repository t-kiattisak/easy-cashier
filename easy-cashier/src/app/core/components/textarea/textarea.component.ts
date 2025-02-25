import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './textarea.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() error: boolean = false;
  @Input() errorMessage: string = 'Invalid input';
  @Input() rows: number = 4;
  @Input() class: string = '';

  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  private innerValue: string = '';
  private onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  get value(): string {
    return this.innerValue;
  }

  set value(value: string) {
    this.innerValue = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  onInputChange(value: string) {
    this.value = value;
  }

  writeValue(value: string): void {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  getTextareaClass(): string {
    return twMerge(
      'w-full px-4 py-2 rounded-md border border-border-gray text-white bg-black focus:outline-none focus:ring-0',
      this.class,
      this.error ? 'border-primary-red border' : ''
    );
  }
}
