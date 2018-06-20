import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveyanceAddComponent } from './conveyance-add.component';

describe('ConveyanceAddComponent', () => {
  let component: ConveyanceAddComponent;
  let fixture: ComponentFixture<ConveyanceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConveyanceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveyanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
