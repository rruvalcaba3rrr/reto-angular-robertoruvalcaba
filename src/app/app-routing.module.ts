import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FoodDishesComponent } from './pages/food-dishes/food-dishes.component';
import { HomeComponent } from './pages/home/home.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { PopularIngredientsComponent } from './pages/popular-ingredients/popular-ingredients.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthGuardGuard } from './services/auth-guard/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardGuard] },
  { path: 'meal-details/:id', component: ProductDetailsComponent },
  { path: 'popular-ingredients', component: PopularIngredientsComponent },
  { path: 'meals-list/:ingredient', component: FoodDishesComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: '**',  redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
    onSameUrlNavigation: 'reload',

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
