import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input('userRole') userRole: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logoutUser() {
    if (localStorage.getItem('user')) localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
