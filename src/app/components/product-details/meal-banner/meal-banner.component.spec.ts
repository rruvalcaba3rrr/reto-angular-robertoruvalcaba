import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealBannerComponent } from './meal-banner.component';

describe('MealBannerComponent', () => {
  let component: MealBannerComponent;
  let fixture: ComponentFixture<MealBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
