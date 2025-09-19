import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  imports: [],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit{
  private cdRef = inject(ChangeDetectorRef); // service that gives manual control over change detection.
  private msgService = inject(MessageService);
  get messages() {
    return this.msgService.allMessages;
  }

  ngOnInit(): void {
    this.msgService.msg$.subscribe(() => {
        this.cdRef.markForCheck(); // if comment out this line, messages will not be displayed
    });
  }

  get msgListComp() {
    console.log('[MessagesList Component] binding re-evaluated.');
    return;
  }
}
