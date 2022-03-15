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
        console.log('entro aqui');
        throw { message: 'Datos de acceso incorrectos, verifiquelos e intente de nuevo.' }
      }
      var userInformation = { username: 'user', name: 'Roberto Ruvalcaba', email: 'ruvalcaba.3rrr@gmail.com', phoneNumber: '9982936532' }
      this.authService.setSession(JSON.stringify(userInformation));
    } catch (error) {
      throw { message: 'Ha ocurrido un error al iniciar sesión, intente de nuevo más tarde' };
    }
  }
}
