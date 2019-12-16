import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteMemberComponent } from './confirm-delete-member.component';

describe('ConfirmDeleteMemberComponent', () => {
  let component: ConfirmDeleteMemberComponent;
  let fixture: ComponentFixture<ConfirmDeleteMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
