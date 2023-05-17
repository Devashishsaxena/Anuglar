import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingRegistrationComponent } from './binding-registration.component';

describe('BindingRegistrationComponent', () => {
  let component: BindingRegistrationComponent;
  let fixture: ComponentFixture<BindingRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
