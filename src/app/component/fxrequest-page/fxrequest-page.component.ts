import { Component } from '@angular/core';
import { FxrequestFormComponent } from '../fxrequest-form/fxrequest-form.component';
import { FxrequestListComponent } from '../fxrequest-list/fxrequest-list.component';
import { FxRequest } from '../../model/fxrequest.model';

@Component({
  selector: 'app-fxrequest-page',
  standalone: true,
  imports: [FxrequestFormComponent, FxrequestListComponent],
  templateUrl: './fxrequest-page.component.html',
  styleUrl: './fxrequest-page.component.css'
})
export class FxrequestPageComponent {
   fxRequests: FxRequest[] = [];

  onRequestSubmitted(request: FxRequest): void {
    this.fxRequests.push(request);
  }
}
