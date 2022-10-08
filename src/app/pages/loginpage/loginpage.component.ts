import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpApiService } from '../../shared/services/httpApi.service';
import Swal from 'sweetalert2';
import { take } from 'rxjs';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  userRole: string = '';

  loginForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private httpApiService: HttpApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((p) => {
      this.userRole = p['userRole'];
    });
  }

  login() {
    const data = this.loginForm.value;
    console.log(this.loginForm);
    this.router.navigate(['features', this.userRole, 'dashboard']);
    // if (this.loginForm.valid) {
    //   this.httpApiService.login(data).subscribe(
    //     (res) => {
    //       console.log(res);
    //       this.router.navigate(['sidebar']);
    //     },
    //     (err) => {
    //       Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `${err.message}`,
    //       });
    //     }
    //   );
    // }
  }
}
