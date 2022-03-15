import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-random-dish-dialog',
  templateUrl: './random-dish-dialog.component.html',
  styleUrls: ['./random-dish-dialog.component.scss']
})
export class RandomDishDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { dishInformation: any },
    public dialogRef: MatDialogRef<RandomDishDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

}
