import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveyanceEditComponent } from './conveyance-edit.component';

describe('ConveyanceEditComponent', () => {
  let component: ConveyanceEditComponent;
  let fixture: ComponentFixture<ConveyanceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConveyanceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveyanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
