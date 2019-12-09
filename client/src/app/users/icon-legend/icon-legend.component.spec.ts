import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLegendComponent } from './icon-legend.component';

describe('IconLegendComponent', () => {
  let component: IconLegendComponent;
  let fixture: ComponentFixture<IconLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
