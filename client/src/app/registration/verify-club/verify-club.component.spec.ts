import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyClubComponent } from './verify-club.component';

describe('VerifyClubComponent', () => {
  let component: VerifyClubComponent;
  let fixture: ComponentFixture<VerifyClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
