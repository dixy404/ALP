import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberRulesComponent } from './member-rules.component';

describe('MemberRulesComponent', () => {
  let component: MemberRulesComponent;
  let fixture: ComponentFixture<MemberRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
