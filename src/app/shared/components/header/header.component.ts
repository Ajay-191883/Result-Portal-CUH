import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isBaseUrl: boolean = true;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.isBaseUrl = this.route.snapshot.url.length > 0;
    console.log(this.route.snapshot.url);
  }
}
