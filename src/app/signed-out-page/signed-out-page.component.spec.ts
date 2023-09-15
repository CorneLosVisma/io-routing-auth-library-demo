import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedOutPageComponent } from './signed-out-page.component';

describe('SignedOutPageComponent', () => {
  let component: SignedOutPageComponent;
  let fixture: ComponentFixture<SignedOutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignedOutPageComponent]
    });
    fixture = TestBed.createComponent(SignedOutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
