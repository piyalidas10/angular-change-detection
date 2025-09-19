import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from './messages.service';

@Component({
  selector: 'app-messages',
  imports: [FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  private msgService = inject(MessageService);
  enteredText = '';

  get msgComp() {
    console.log('[Message Component] binding re-evaluated.');
    return;
  }

  onSubmit() {
    this.msgService.addMsg(this.enteredText);
    this.enteredText = '';
  }
}
