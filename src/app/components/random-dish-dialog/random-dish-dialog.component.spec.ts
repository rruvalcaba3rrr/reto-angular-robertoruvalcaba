import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDishDialogComponent } from './random-dish-dialog.component';

describe('RandomDishDialogComponent', () => {
  let component: RandomDishDialogComponent;
  let fixture: ComponentFixture<RandomDishDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomDishDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomDishDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
