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
    console.log(route.params);
    let expectedRole = route.params['userRole'] as string;
    let authUser: AuthUser;
    authUser = this.auth.authenticatedUser() as AuthUser;
    console.log('::expectedUser - ', expectedRole);
    console.log('::authUser - ', authUser);
    if (!(expectedRole == authUser.userRole)) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
