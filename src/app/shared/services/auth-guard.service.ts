import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthUser } from '../Model/user.model';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let expectedRole = (route.params['userRole'] as string).toUpperCase();
    let authUser: AuthUser;
    authUser = this.auth.authenticatedUser() as AuthUser;
    console.log(expectedRole);
    console.log(authUser);
    if (!(expectedRole == authUser.userRole)) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
