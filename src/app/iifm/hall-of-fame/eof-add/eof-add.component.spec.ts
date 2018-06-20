import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EofAddComponent } from './eof-add.component';

describe('EofAddComponent', () => {
  let component: EofAddComponent;
  let fixture: ComponentFixture<EofAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EofAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EofAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
