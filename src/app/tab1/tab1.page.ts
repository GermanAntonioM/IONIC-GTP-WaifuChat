import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SettingComponent } from '../setting/setting.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public androidName: string = "W. Android Girl";
  public icon: string = "/assets/sprites/navbar/avatar.gif";
  public settingIcon: string = "/assets/sprites/navbar/configIcon.svg";
  public sendIcon: string = "/assets/sprites/extra/SendIcon.svg";
  

  constructor(private popoverController: PopoverController) {}

  async OpenConfiguration(e: Event){
    const popover = await this.popoverController.create({
      component: SettingComponent,
      event: e,
    });

    await popover.present();

  }
}
