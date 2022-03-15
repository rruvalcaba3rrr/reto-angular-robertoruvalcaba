import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss']
})
export class MealCardComponent implements OnInit {
  @Input() meal: any;

  constructor() { }

  ngOnInit(): void {
  }

}
