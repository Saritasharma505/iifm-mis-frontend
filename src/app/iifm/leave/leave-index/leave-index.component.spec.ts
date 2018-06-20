import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveIndexComponent } from './leave-index.component';

describe('LeaveIndexComponent', () => {
  let component: LeaveIndexComponent;
  let fixture: ComponentFixture<LeaveIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
