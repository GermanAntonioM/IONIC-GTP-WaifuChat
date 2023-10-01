import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidSpritesHandleComponent } from './android-sprites-handle.component';

describe('AndroidSpritesHandleComponent', () => {
  let component: AndroidSpritesHandleComponent;
  let fixture: ComponentFixture<AndroidSpritesHandleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndroidSpritesHandleComponent]
    });
    fixture = TestBed.createComponent(AndroidSpritesHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
