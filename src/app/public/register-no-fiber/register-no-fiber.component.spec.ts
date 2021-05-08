import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNoFiberComponent } from './register-no-fiber.component';

describe('RegisterNoFiberComponent', () => {
  let component: RegisterNoFiberComponent;
  let fixture: ComponentFixture<RegisterNoFiberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNoFiberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNoFiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
