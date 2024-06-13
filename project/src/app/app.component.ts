import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientComponent } from './components/client/client.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
