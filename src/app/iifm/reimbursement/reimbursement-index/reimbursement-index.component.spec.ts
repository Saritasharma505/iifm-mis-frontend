import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementIndexComponent } from './reimbursement-index.component';

describe('ReimbursementIndexComponent', () => {
  let component: ReimbursementIndexComponent;
  let fixture: ComponentFixture<ReimbursementIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimbursementIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
