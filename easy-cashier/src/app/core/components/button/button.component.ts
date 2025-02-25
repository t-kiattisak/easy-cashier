import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { buttonVariants, ButtonVariants } from './button.variants';
import { CommonModule } from '@angular/common';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input('class') class: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: ButtonVariants['variant'] = 'primary';
  @Input() size: ButtonVariants['size'] = 'md';
  @Input() disabled: boolean = false;

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  get buttonClasses(): string {
    const baseClasses = buttonVariants({
      variant: this.variant,
      size: this.size,
    });
    return twMerge(
      this.disabled
        ? `${baseClasses} opacity-50 cursor-not-allowed`
        : `${baseClasses} cursor-pointer`,
      this.class
    );
  }

  onClick(event: Event) {
    if (!this.disabled) {
      this.clickEvent.emit(event);
    }
  }
}
