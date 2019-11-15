import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubContainerComponent } from './club-container.component';

describe('ClubContainerComponent', () => {
  let component: ClubContainerComponent;
  let fixture: ComponentFixture<ClubContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
