import { Component, ElementRef, ViewChild } from '@angular/core';
import { AndroidAnimationHandlerService } from 'src/app/_services/android-animation-handler.service';
import { ChatGptService } from 'src/app/_services/chatGPT/chat-gpt.service';
import { MessageBox } from '../_models/message.model';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
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
    this.androidAnimationHandlerService.SetAnimation('talk');
    this.AddMessageBox('android', "Soy una androide con una cantidad de caracteres establecidas que te parece si me hablas de ti?");
    this.scrollToBottom();
    // this.openIAService.QuestionToIA(this.questionForAndroid).then((result: string | undefined) => {
    //   this.androidAnimationHandlerService.SetAnimation('talk');
    //   this.AddMessageBox('android',result?? "");
    // }).catch((error) => {
    //   this.androidAnimationHandlerService.SetAnimation('talk');
    //   this.AddMessageBox('android',"No puedo responder en estos momentos.");
    // })
  }
  
  AddMessageBox(avatar: 'user' | 'android', message: string) {
    this.messages.push({
      avatar: avatar,
      message: message,
      time: new Date()
    })
  }
  scrollToBottom(): void {
    scroll(0, 100);                
  }
}
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});