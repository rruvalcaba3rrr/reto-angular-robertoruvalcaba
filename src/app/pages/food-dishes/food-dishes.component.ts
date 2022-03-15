import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-food-dishes',
  templateUrl: './food-dishes.component.html',
  styleUrls: ['./food-dishes.component.scss']
})
export class FoodDishesComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public displayedColumns: string[] = ['id', 'image', 'name', 'action'];
  public dataSource!: MatTableDataSource<any>;
  public searching: boolean = true;
  public categories: any = [];
  public categorySelected = "";
  public areaSelected = "";
  public areas: any = [];
  constructor(private apiService: ApiService,
    private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    await this.getMeals();
    await this.getCategoriesList();
    await this.getAreasList();
  }

  async getMeals() {
    this.searching = true;
    try {

      var ingredient = this.route.snapshot.paramMap.get('ingredient');
      var res = [];
      if (ingredient == 'null') {
        res = await this.apiService.getMealsList();
      } else {
        res = await this.apiService.findMealsByIngredient(ingredient!);
      }
      this.dataSource = new MatTableDataSource(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      this.searching = false;
    } catch (error: any) {
      console.log(error.message);
    }
  }


  async getCategoriesList() {
    try {
      this.categories = await this.apiService.getMealsCategories();
    } catch (error) {
      console.log(error);
    }
  }

  async getAreasList() {
    try {
      this.areas = await this.apiService.getMealsAreas();
    } catch (error) {
      console.log(error);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async searchByCategory(category: any) {
    this.areaSelected = "";
    this.searching = true;

    try {
      var res = await this.apiService.findMealsByCategory(category.value);
      this.dataSource = new MatTableDataSource(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      this.searching = false;
    } catch (error) {
      console.log(error);

    }
  }

  async searchByArea(area: any) {
    this.categorySelected = "";
    this.searching = true;

    try {
      var res = await this.apiService.findMealsByArea(area.value);
      this.dataSource = new MatTableDataSource(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      this.searching = false;
    } catch (error) {
      console.log(error);

    }
  }
}
