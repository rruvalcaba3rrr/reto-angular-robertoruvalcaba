import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-content',
  templateUrl: './meal-content.component.html',
  styleUrls: ['./meal-content.component.scss']
})
export class MealContentComponent implements OnInit {
  @Input() mealInformation!: any;

  public ingredients: string[] = Array(20);
  constructor() { }

  ngOnInit(): void {
  }

}
