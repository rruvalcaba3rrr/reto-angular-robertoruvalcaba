import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  async getRandomDish() {
    try {
      var result = await this.http.get<{ meals: any[] }>(`${environment.URL_API}/random.php`).toPromise();
      return result.meals[0];
    } catch (error) {
      throw error;
    }
  }

  async findMealById(idMeal: string) {
    try {
      var result = await this.http.get<{ meals: any[] }>(`${environment.URL_API}/lookup.php?i=${idMeal}`).toPromise();
      return result.meals[0];
    } catch (error) {
      throw error;
    }
  }

  async findMealsByIngredient(ingredient: string) {
    try {
      var result = await this.http.get<{ meals: any[] }>(`${environment.URL_API}/filter.php?i=${ingredient}`).toPromise();
      return result.meals;
    } catch (error) {
      throw error;
    }
  }


  async findMealsByCategory(category: string) {
    try {
      var result = await this.http.get<{ meals: any[] }>(`${environment.URL_API}/filter.php?c=${category}`).toPromise();
      return result.meals;
    } catch (error) {
      throw error;
    }
  }

  async findMealsByArea(area: string) {
    try {
      var result = await this.http.get<{ meals: any[] }>(`${environment.URL_API}/filter.php?a=${area}`).toPromise();
      return result.meals;
    } catch (error) {
      throw error;
    }
  }

  async getMealsList() {
    try {
      var result = await this.http.get<{ meals: any[] }>(`${environment.URL_API}/search.php?f=a`).toPromise();
      return result.meals;
    } catch (error) {
      throw error;
    }
  }

  async getSpecialIngredients() {
    try {
      var result = await this.http.get<{ meals: any[] }>(`${environment.URL_API}/list.php?i=list`).toPromise();
      return result.meals;
    } catch (error) {
      throw error;
    }
  }

  async getMealsCategories() {
    try {
      var result = await this.http.get<{ categories: any[] }>(`${environment.URL_API}/categories.php`).toPromise();
      return result.categories;
    } catch (error) {
      throw error;
    }
  }

  async getMealsAreas() {
    try {
      var result = await this.http.get<{ meals: any[] }>(`${environment.URL_API}/list.php?a=list`).toPromise();
      return result.meals;
    } catch (error) {
      throw error;
    }
  }
}
