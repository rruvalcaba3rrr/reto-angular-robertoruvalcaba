import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-banner',
  templateUrl: './meal-banner.component.html',
  styleUrls: ['./meal-banner.component.scss']
})
export class MealBannerComponent implements OnInit {
  @Input() imageMeal!: string;
  @Input() mealName!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
