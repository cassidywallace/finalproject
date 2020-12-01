import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbudgetformComponent } from './addbudgetform.component';

describe('AddbudgetformComponent', () => {
  let component: AddbudgetformComponent;
  let fixture: ComponentFixture<AddbudgetformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbudgetformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbudgetformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
