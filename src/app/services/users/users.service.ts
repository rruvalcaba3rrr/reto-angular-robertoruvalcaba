import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private authService: AuthService) { }

  signIn(user: User) {
    try {
      if (user.username != 'user' || user.password != 'root') {
        throw { message: 'Datos de acceso incorrectos, verifiquelos e intente de nuevo.' }
      }
      var userInformation = { username: 'user', name: 'Roberto Ruvalcaba', email: 'ruvalcaba.3rrr@gmail.com', phoneNumber: '9982936532' }
      this.authService.setSession(JSON.stringify(userInformation));;
      
      if (user.rememberMe) this.authService.setRememberMe(user);
      if (!user.rememberMe) this.authService.removeRememberMe();
      return;
    } catch (error) {
      throw { message: 'Ha ocurrido un error al iniciar sesión, intente de nuevo más tarde' };
    }
  }
}
