import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() requestSubmitted = new EventEmitter<FxRequest>();

  fxRequestForm: FormGroup;
  currencies = ['USD', 'EUR', 'NGN'];

  constructor(private fb: FormBuilder) {
    this.fxRequestForm = this.fb.group({
      sourceCurrency: ['', Validators.required],
      targetCurrency: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(0.01)]],
    });
  }

  onSubmit(): void {
    if (this.fxRequestForm.valid) {
      const newRequest: FxRequest = {
        id: Date.now(),
        sourceCurrency: this.fxRequestForm.value.sourceCurrency,
        targetCurrency: this.fxRequestForm.value.targetCurrency,
        amount: this.fxRequestForm.value.amount,
        requestDate: new Date(),
      };

      this.requestSubmitted.emit(newRequest);
      this.fxRequestForm.reset();
    }
  }
}
