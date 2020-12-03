import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2Component } from './plan2.component';

describe('Plan2Component', () => {
  let component: Plan2Component;
  let fixture: ComponentFixture<Plan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plan2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
