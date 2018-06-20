import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDutyIndexComponent } from './on-duty-index.component';

describe('OnDutyIndexComponent', () => {
  let component: OnDutyIndexComponent;
  let fixture: ComponentFixture<OnDutyIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnDutyIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDutyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
