import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { MessagesContainerComponent } from './messages-container/messages-container.component';
import { MessageBoxComponent } from './messages-container/message-box/message-box.component';
import { AndroidSpritesHandleComponent } from './android-sprites-handle/android-sprites-handle.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule],
  declarations: [
    ExploreContainerComponent,
    ChatContainerComponent,
    MessagesContainerComponent,
    MessageBoxComponent,
    AndroidSpritesHandleComponent,
  ],
  exports: [ExploreContainerComponent],
})
export class ExploreContainerComponentModule {}
