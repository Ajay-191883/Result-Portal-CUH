import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  resultDetailsForm: FormGroup;
  availableResults: any[] = [];

  constructor(private helperService: HelperService, private router: Router) {}

  ngOnInit(): void {
    this.resultDetailsForm = new FormGroup({
      name: new FormControl(''),
      rollno: new FormControl(''),
      programme: new FormControl(''),
      department: new FormControl(''),
      session: new FormControl(''),
    });
  }

  fetchResultsInfo() {
    this.helperService.showLoader();
    console.log(this.resultDetailsForm.value);

    setTimeout(() => {
      this.helperService.hideLoader();
      this.availableResults = [
        'B.Tech CSE 7th sem result',
        'B.Tech CSE 6th sem result',
      ];
    }, 1500);
  }

  goBack() {
    this.availableResults = [];
  }

  getMarksheet() {
    this.router.navigateByUrl('features/student/result/marksheet');
  }

  adjust_textarea(h: any) {
    h.style.height = '20px';
    h.style.height = h.scrollHeight + 'px';
  }
}
