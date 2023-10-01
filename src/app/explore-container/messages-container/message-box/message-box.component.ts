import { Component, Input, OnInit } from '@angular/core';
import { MessageBox } from '../../_models/message.model';
import { AndroidAnimationHandlerService } from 'src/app/_services/android-animation-handler.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
})
export class MessageBoxComponent implements OnInit {
  @Input() messageContent?: MessageBox;

  nameUser: string = '';
  messageIndex: number = 0;

  messageToPrint: string = '';

  constructor(private androidAnimationsHandlerService: AndroidAnimationHandlerService) {
  }

  ngOnInit(): void {
    if (this.messageContent) {
      this.nameUser =
        this.messageContent.avatar == 'android' ? 'Android Girl' : 'User';
      this.PrintMessageOnMessageBox();
    }
  }
  PrintMessageOnMessageBox() {
    if (this.messageIndex < (this.messageContent?.message?.length ?? 0)) {
      this.messageToPrint += this.messageContent?.message[this.messageIndex];
      this.messageIndex++;
      setTimeout(() => this.PrintMessageOnMessageBox(), 100);
    }else if (this.messageContent?.avatar == 'android'){
        this.androidAnimationsHandlerService.SetAnimation('stand');
    }
  }
}
