import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxRequest } from '../../model/fxrequest.model';

@Component({
  selector: 'app-fxrequest-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fxrequest-list.component.html',
  styleUrl: './fxrequest-list.component.css'
})
export class FxrequestListComponent {
  @Input() requests: FxRequest[] = [];
}
