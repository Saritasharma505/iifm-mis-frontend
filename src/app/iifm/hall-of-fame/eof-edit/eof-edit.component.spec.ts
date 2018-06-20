import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EofEditComponent } from './eof-edit.component';

describe('EofEditComponent', () => {
  let component: EofEditComponent;
  let fixture: ComponentFixture<EofEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EofEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EofEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
