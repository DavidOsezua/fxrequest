import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FxrequestPageComponent } from "./component/fxrequest-page/fxrequest-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FxrequestPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fxrequest';
}
