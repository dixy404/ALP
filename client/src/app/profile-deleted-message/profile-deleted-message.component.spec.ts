import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDeletedMessageComponent } from './profile-deleted-message.component';

describe('ProfileDeletedMessageComponent', () => {
  let component: ProfileDeletedMessageComponent;
  let fixture: ComponentFixture<ProfileDeletedMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDeletedMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDeletedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
