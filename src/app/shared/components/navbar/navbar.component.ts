import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  Event as NavigationEvent,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthUser } from '../../Model/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userFirstName = 'User';
  userLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.authenticatedUser()) {
      this.userFirstName =
        (this.authService.authenticatedUser() as AuthUser).first_name ||
        'Student';
    }
  }
}
