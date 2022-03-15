import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public signInForm: FormGroup;
  public isSignedIn: boolean = false;
  public error = false;
  public errorMessage = '';

  constructor(public fb: FormBuilder, private router: Router, private userService: UsersService) {

    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  async SignInRoutine() {
    if (!this.signInForm.valid) {
      Swal.fire({
        title: 'Datos invalidos',
        text: 'Verifique sus datos e intente de nuevo.',
        confirmButtonText: 'Aceptar',
        customClass: {
          container: "iosAlert",
          confirmButton: "blue",
        }
      });
      return;
    }
    try {
      const user: User = { username: this.signInForm.value.username, password: this.signInForm.value.password };
       await this.userService.signIn(user);
      this.router.navigate(['/home']);
    } catch (e) {
      var error: any = e;
      Swal.fire({
        title: 'Ha ocurrido un error',
        text: `${error.message}`,
        confirmButtonText: 'Aceptar',
        customClass: {
          container: "iosAlert",
          confirmButton: "blue",
        }
      });
    }
  }

}
