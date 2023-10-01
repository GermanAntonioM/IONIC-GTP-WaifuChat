import { Component, Input, OnInit } from '@angular/core';
import { MessageBox } from '../_models/message.model';

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.css']
})
export class MessagesContainerComponent implements OnInit{
  @Input() items: MessageBox[] = [];

  ngOnInit(): void {
    console.log(this.items);
  }



}
