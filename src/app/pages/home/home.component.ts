import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RandomDishDialogComponent } from 'src/app/components/random-dish-dialog/random-dish-dialog.component';
import { ApiService } from 'src/app/services/api/api.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public emptyArray: string[] = ['', '', '', '', '',];
  public intervalTime = interval(100000);
  public refreshRandom!: Subscription;
  public carouselMeals: any = [];
  public searching = true;
  constructor(private apiService: ApiService,
    private dialog: MatDialog) { }

  ngOnDestroy(): void {
    if (this.refreshRandom) this.refreshRandom.unsubscribe();
  }

  ngOnInit(): void {
    this.getRandomDish();
    this.getCarouselRamdomMeals();
    this.refreshRandom = this.intervalTime.subscribe(() => this.getCarouselRamdomMeals());

  }

  async getRandomDish() {
    try {
      var dishInformation = await this.apiService.getRandomDish();
      this.dialog.open(RandomDishDialogComponent, {
        maxWidth: '600px',
        data: { dishInformation }
      });
    } catch (error) {
      console.log(error);

    }
  }

  async getCarouselRamdomMeals() {
    this.searching = true;
    try {
      this.carouselMeals = [];
      var meals = await Promise.all(this.emptyArray.map(async d => {
        var mealInfo = await this.apiService.getRandomDish();
        return mealInfo;
      }));
      this.carouselMeals = meals;
      this.searching = false;

    } catch (error) {
      console.log(error);

    }
  }

}
