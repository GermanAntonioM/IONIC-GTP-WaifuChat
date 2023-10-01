import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Androidanimation } from '../_types/animations.model';

@Injectable({
  providedIn: 'root'
})
export class AndroidAnimationHandlerService {

  private selectedAnimation = new BehaviorSubject<Androidanimation>('stand');

  public GetSelectedAnimation():Observable<Androidanimation>{
    return this.selectedAnimation;
  }

  public SetAnimation(animation: Androidanimation){
    this.selectedAnimation.next(animation);
  }
  
}
