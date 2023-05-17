import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAutoComponent } from './input-auto.component';

describe('InputAutoComponent', () => {
  let component: InputAutoComponent;
  let fixture: ComponentFixture<InputAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
