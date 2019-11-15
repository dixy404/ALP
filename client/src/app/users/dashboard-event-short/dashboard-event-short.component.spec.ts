import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEventShortComponent } from './dashboard-event-short.component';

describe('DashboardEventShortComponent', () => {
  let component: DashboardEventShortComponent;
  let fixture: ComponentFixture<DashboardEventShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEventShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEventShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
