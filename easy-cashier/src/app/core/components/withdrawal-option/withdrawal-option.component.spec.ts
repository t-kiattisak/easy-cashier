import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalOptionComponent } from './withdrawal-option.component';

describe('WithdrawalOptionComponent', () => {
  let component: WithdrawalOptionComponent;
  let fixture: ComponentFixture<WithdrawalOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdrawalOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawalOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
