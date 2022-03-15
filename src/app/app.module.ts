import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Angular Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
//Extras
import { CookieService } from 'ngx-cookie-service';
//Components
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PopularIngredientsComponent } from './pages/popular-ingredients/popular-ingredients.component';
import { FoodDishesComponent } from './pages/food-dishes/food-dishes.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RandomDishDialogComponent } from './components/random-dish-dialog/random-dish-dialog.component';
import { MealBannerComponent } from './components/product-details/meal-banner/meal-banner.component';
import { MealVideoComponent } from './components/product-details/meal-video/meal-video.component';
import { MealContentComponent } from './components/product-details/meal-content/meal-content.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MealCardComponent } from './components/product-details/meal-card/meal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent,
    PopularIngredientsComponent,
    FoodDishesComponent,
    ProductDetailsComponent,
    RandomDishDialogComponent,
    MealBannerComponent,
    MealVideoComponent,
    MealContentComponent,
    MyProfileComponent,
    MealCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    //Angular Material
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDialogModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
