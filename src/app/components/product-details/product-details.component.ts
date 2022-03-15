import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public mealInformation: any;
  public mobileViewActive = false;
  scrHeight: any;
  scrWidth: any;
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    this.mobileViewActive = false;
    if (this.scrWidth <= 768) this.mobileViewActive = true;
  }
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMealInformation();
  }

  async getMealInformation() {
    try {
      var idMeal = this.route.snapshot.paramMap.get('id');
      this.mealInformation = await this.apiService.findMealById(idMeal!);
    } catch (error) {
      console.log(error);

    }
  }
}
