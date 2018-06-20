import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDutyViewComponent } from './on-duty-view.component';

describe('OnDutyViewComponent', () => {
  let component: OnDutyViewComponent;
  let fixture: ComponentFixture<OnDutyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnDutyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDutyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
