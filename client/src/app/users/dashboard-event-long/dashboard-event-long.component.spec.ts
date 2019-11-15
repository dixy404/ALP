import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEventLongComponent } from './dashboard-event-long.component';

describe('DashboardEventLongComponent', () => {
  let component: DashboardEventLongComponent;
  let fixture: ComponentFixture<DashboardEventLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEventLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEventLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
