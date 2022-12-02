import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthUser } from 'src/app/shared/Model/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userRole: string = '';
  userFirstName = 'User';
  constructor(
    private helperService: HelperService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.userRole = p['userRole'];
    });

    

    setTimeout(() => {
      this.helperService.hideLoader();
    }, 1500);
  }
}
