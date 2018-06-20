import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EofViewComponent } from './eof-view.component';

describe('EofViewComponent', () => {
  let component: EofViewComponent;
  let fixture: ComponentFixture<EofViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EofViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EofViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
