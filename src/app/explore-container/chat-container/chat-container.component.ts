import { Component } from '@angular/core';
import { AndroidAnimationHandlerService } from 'src/app/_services/android-animation-handler.service';
import { ChatGptService } from 'src/app/_services/chatGPT/chat-gpt.service';
import { MessageBox } from '../_models/message.model';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent {

  questionForAndroid: string = "";
  sendIcon: string = "/assets/sprites/extra/sendIcon.svg";

  constructor(private openIAService: ChatGptService, private androidAnimationHandlerService: AndroidAnimationHandlerService) {
  }

  messages: MessageBox[] = [];

  CreateQuestion(){
    if(this.questionForAndroid){
      this.AddMessageBox('user',this.questionForAndroid);
      this.SendQuestionToChatGPT();
      this.questionForAndroid = "";
    }
  }
  SendQuestionToChatGPT() {
    this.androidAnimationHandlerService.SetAnimation('thinking');
    this.openIAService.QuestionToIA(this.questionForAndroid).then((result: string | undefined) => {
      this.androidAnimationHandlerService.SetAnimation('talk');
      this.AddMessageBox('android',result?? "");
    }).catch((error) => {
      this.androidAnimationHandlerService.SetAnimation('talk');
      this.AddMessageBox('android',"No puedo responder en estos momentos.");
    })
  }
  
  AddMessageBox(avatar: 'user' | 'android', message: string) {
    this.messages.push({
      avatar: avatar,
      message: message,
      time: new Date()
    })
  }
}
