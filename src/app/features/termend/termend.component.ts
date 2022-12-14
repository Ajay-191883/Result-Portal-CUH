import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from '../../shared/services/helper.service';

@Component({
  selector: 'app-termend',
  templateUrl: './termend.component.html',
  styleUrls: ['./termend.component.css'],
})
export class TermendComponent implements OnInit {
  userRole: string = '';
  constructor(
    private helperService: HelperService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.userRole = p['userRole'];
    });

    setTimeout(() => {
      this.helperService.hideLoader();
    }, 1500);
    this.helperService.hideLoader();
  }
}
