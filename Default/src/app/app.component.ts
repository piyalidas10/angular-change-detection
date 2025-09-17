import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { ParentComponent } from "./parent/parent.component";

@Component({
  selector: 'app-root',
  imports: [CounterComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  get appOutput() {
    console.log('[App Component] binding re-evaluated.');
    return;
  }
}
