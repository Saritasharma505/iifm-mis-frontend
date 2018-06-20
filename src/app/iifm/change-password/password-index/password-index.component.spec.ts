import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordIndexComponent } from './password-index.component';

describe('PasswordIndexComponent', () => {
  let component: PasswordIndexComponent;
  let fixture: ComponentFixture<PasswordIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
