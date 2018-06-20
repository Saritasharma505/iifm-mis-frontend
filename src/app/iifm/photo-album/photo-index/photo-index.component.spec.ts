import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoIndexComponent } from './photo-index.component';

describe('PhotoIndexComponent', () => {
  let component: PhotoIndexComponent;
  let fixture: ComponentFixture<PhotoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
