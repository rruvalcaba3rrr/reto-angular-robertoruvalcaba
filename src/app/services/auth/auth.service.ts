import { Injectable } from '@angular/core';

import { CookieService } from "ngx-cookie-service";
import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookies: CookieService) { }


  setSession(session: string) {
    this.cookies.set("session", session);
  }
  getSession() {
    return this.cookies.get("session");
  }
  removeSession() {
    return this.cookies.delete("session");
  }

  setRememberMe(user: User) {
    this.cookies.set("rememberme", JSON.stringify(user));
  }
  getRememberMe() {
    return this.cookies.get("rememberme");
  }
  removeRememberMe() {
    return this.cookies.delete("rememberme");
  }


}
