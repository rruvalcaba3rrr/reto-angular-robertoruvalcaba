import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealVideoComponent } from './meal-video.component';

describe('MealVideoComponent', () => {
  let component: MealVideoComponent;
  let fixture: ComponentFixture<MealVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
