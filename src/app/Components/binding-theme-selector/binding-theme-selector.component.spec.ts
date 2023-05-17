import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingThemeSelectorComponent } from './binding-theme-selector.component';

describe('BindingThemeSelectorComponent', () => {
  let component: BindingThemeSelectorComponent;
  let fixture: ComponentFixture<BindingThemeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingThemeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingThemeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
