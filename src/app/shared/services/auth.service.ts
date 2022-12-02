import { Injectable } from '@angular/core';
import { AuthUser } from '../Model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authenticatedUser() {
    if (localStorage.getItem('user')) {
      const user: AuthUser = JSON.parse(localStorage.getItem('user') as string);
      return user;
    } else {
      return false;
    }
  }
}
