import { Component, signal } from '@angular/core';

@Component({
  selector: 'nasa-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nasa.io');
}
