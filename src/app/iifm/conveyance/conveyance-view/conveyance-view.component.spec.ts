import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveyanceViewComponent } from './conveyance-view.component';

describe('ConveyanceViewComponent', () => {
  let component: ConveyanceViewComponent;
  let fixture: ComponentFixture<ConveyanceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConveyanceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveyanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
