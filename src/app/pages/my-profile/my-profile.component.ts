import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  public userInfo: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.authService.getSession());
    this.userInfo = JSON.parse(this.authService.getSession());
  }

  logOut() {
    this.authService.removeSession();
    this.router.navigate(['']);
  }
}
