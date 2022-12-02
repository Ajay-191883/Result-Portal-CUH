import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpApiService } from '../../shared/services/httpApi.service';
import Swal from 'sweetalert2';
import { take } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthUser } from 'src/app/shared/Model/user.model';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  userRole: string = '';
  loading: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      // Validators.minLength(4),
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      // Validators.minLength(6),
    ]),
  });

  constructor(
    private httpApiService: HttpApiService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((p) => {
      this.userRole = p['userRole'];
    });

    if (this.authService.authenticatedUser()) {
      this.router.navigate([
        '/features',
        (
          this.authService.authenticatedUser() as AuthUser
        ).userRole.toLowerCase(),
        'dashboard',
      ]);
    }
  }

  login() {
    const data = this.loginForm.value;
    data['role'] = this.userRole.toUpperCase();
    if (this.loginForm.valid) {
      this.loading = true;
      this.httpApiService
        .login(data)
        .pipe(take(1))
        .subscribe({
          next: (res) => {
            this.loading = false;
            console.log(res);
            localStorage.setItem('user', JSON.stringify(res.data));
            this.router.navigate(['features', this.userRole, 'dashboard']);
          },
          error: (err) => {
            this.loading = false;
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${err.error.message}`,
            });
          },
        });
    }
  }
}
