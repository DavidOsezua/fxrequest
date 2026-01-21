import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FxRequest } from '../../model/fxrequest.model';

@Component({
  selector: 'app-fxrequest-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fxrequest-form.component.html',
  styleUrl: './fxrequest-form.component.css',
})
export class FxrequestFormComponent {
  @Input() isOpen = false;
  @Output() requestSubmitted = new EventEmitter<FxRequest>();
  @Output() closeModal = new EventEmitter<void>();

  fxRequestForm: FormGroup;
  currencies = ['USD', 'EUR', 'NGN', 'CAD',];

  constructor(private fb: FormBuilder) {
    this.fxRequestForm = this.fb.group({
      requesterName: ['', [Validators.required, Validators.minLength(2)]],
      sourceCurrency: ['', Validators.required],
      targetCurrency: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(0.01)]],
      purpose: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.fxRequestForm.valid) {
      const newRequest: FxRequest = {
        id: Date.now(),
        requesterName: this.fxRequestForm.value.requesterName,
        sourceCurrency: this.fxRequestForm.value.sourceCurrency,
        targetCurrency: this.fxRequestForm.value.targetCurrency,
        amount: this.fxRequestForm.value.amount,
        purpose: this.fxRequestForm.value.purpose,
        status: 'Pending',
        requestDate: new Date(),
      };

      this.requestSubmitted.emit(newRequest);
      this.fxRequestForm.reset();
      this.closeModal.emit();
    }
  }

  onClose(): void {
    this.fxRequestForm.reset();
    this.closeModal.emit();
  }
}
