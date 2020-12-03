import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiberComponent } from './fiber.component';

describe('FiberComponent', () => {
  let component: FiberComponent;
  let fixture: ComponentFixture<FiberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
