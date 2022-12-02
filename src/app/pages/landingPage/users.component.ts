import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/shared/Model/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.authenticatedUser()) {
      this.router.navigate([
        'features',
        (
          this.authService.authenticatedUser() as AuthUser
        ).userRole.toLowerCase(),
        'dashboard',
      ]);
    }
  }

  studentLogin() {
    let user: object = {
      role: 'student',
    };
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['features', 'student', 'dashboard']);
  }
}
