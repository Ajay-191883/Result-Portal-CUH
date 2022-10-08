import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-dataupload',
  templateUrl: './dataupload.component.html',
  styleUrls: ['./dataupload.component.css'],
})
export class DatauploadComponent implements OnInit {
  userRole: string = ''
  constructor(private helperService: HelperService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.userRole = p['userRole'];
    });

    setTimeout(() => {
      this.helperService.hideLoader();
    }, 1500);
  }
}
