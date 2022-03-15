import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealContentComponent } from './meal-content.component';

describe('MealContentComponent', () => {
  let component: MealContentComponent;
  let fixture: ComponentFixture<MealContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
