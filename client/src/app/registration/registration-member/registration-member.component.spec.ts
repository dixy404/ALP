import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMemberComponent } from './registration-member.component';

describe('RegistrationMemberComponent', () => {
  let component: RegistrationMemberComponent;
  let fixture: ComponentFixture<RegistrationMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
