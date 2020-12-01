import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertupComponent } from './alertup.component';

describe('AlertupComponent', () => {
  let component: AlertupComponent;
  let fixture: ComponentFixture<AlertupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
