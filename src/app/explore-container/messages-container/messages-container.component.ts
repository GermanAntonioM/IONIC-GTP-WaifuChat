import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MessageBox } from '../_models/message.model';
import { AndroidAnimationHandlerService } from 'src/app/_services/android-animation-handler.service';

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.css']
})
export class MessagesContainerComponent implements OnInit{

  constructor() {
  }

  @Input() items: MessageBox[] = [];

  ngOnInit(): void {
 
  }

}
