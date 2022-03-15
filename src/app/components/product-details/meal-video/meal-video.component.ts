import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-video',
  templateUrl: './meal-video.component.html',
  styleUrls: ['./meal-video.component.scss']
})
export class MealVideoComponent implements OnInit {
  @Input() mealVideo!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
