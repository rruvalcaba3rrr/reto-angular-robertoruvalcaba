import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate() {
    var session = this.authService.getSession();
    if (session == undefined || session == "" || session == null) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }

}
