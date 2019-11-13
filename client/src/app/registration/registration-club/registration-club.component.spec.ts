import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationClubComponent } from './registration-club.component';

describe('RegistrationClubComponent', () => {
  let component: RegistrationClubComponent;
  let fixture: ComponentFixture<RegistrationClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
