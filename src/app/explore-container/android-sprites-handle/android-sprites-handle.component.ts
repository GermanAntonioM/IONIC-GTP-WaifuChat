import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AndroidAnimationHandlerService } from 'src/app/_services/android-animation-handler.service';
import { Androidanimation } from 'src/app/_types/animations.model';

@Component({
  selector: 'app-android-sprites-handle',
  templateUrl: './android-sprites-handle.component.html',
  styleUrls: ['./android-sprites-handle.component.css'],
})
export class AndroidSpritesHandleComponent implements OnInit,AfterContentChecked {
  android: string = '';
  baseAnimationURI: string = 'android-girl-';
  formatSprite: string = '.gif';
  androidAnimationSelect: Androidanimation = 'stand';

  constructor(
    private androidAnimationHandlerService: AndroidAnimationHandlerService,
    private cdref: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this._HandleAnimation();
  }
  private _HandleAnimation() {
    this.androidAnimationHandlerService.GetSelectedAnimation().subscribe({
      next: (animation: Androidanimation) => {
        this.androidAnimationSelect = animation;
        this.android = `/assets/sprites/char/${this.baseAnimationURI}${this.androidAnimationSelect}${this.formatSprite}`;
        this.ngAfterContentChecked();
      },
    });
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
 }
}
