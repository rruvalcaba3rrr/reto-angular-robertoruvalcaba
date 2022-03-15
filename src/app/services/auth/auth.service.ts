import { Injectable } from '@angular/core';

import { CookieService } from "ngx-cookie-service";
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
    return this.cookies.deleteAll()
  }
}
