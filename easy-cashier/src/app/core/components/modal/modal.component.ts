import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() open: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  handleClose() {
    this.onClose.emit();
  }
}
