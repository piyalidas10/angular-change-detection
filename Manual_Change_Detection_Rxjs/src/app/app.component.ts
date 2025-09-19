import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';

@Component({
  selector: 'app-root',
  imports: [MessagesComponent, MessagesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private messages: string[] = [];

  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    this.messages = [...this.messages, message];
  }

  get appOutput() {
    console.log('[App Component] binding re-evaluated.');
    return;
  }
}
