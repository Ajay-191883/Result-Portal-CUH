import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';

interface DocType {
  value: string;
  viewValue: string;
}

interface DocTypeGroup {
  disabled?: boolean;
  name: string;
  docType: DocType[];
}

@Component({
  selector: 'app-dataupload',
  templateUrl: './dataupload.component.html',
  styleUrls: ['./dataupload.component.css'],
})
export class DatauploadComponent implements OnInit {
  userRole: string = '';
  constructor(
    private helperService: HelperService,
    private route: ActivatedRoute
  ) {}

  submitDocControl = new FormControl('');
  submitDocGroups: DocTypeGroup[] = [
    {
      name: 'ADMIN',
      disabled: false,
      docType: [
        { value: 'doc-end-term-res', viewValue: 'End Term Result' },
        {
          value: 'doc-combined-sem-res',
          viewValue: 'Combined Semester Result',
        },
        { value: 'doc-internal-res', viewValue: 'Internal Marks Result' },
      ],
    },
    {
      name: 'R&S',
      disabled: true,
      docType: [
        { value: 'doc-end-term-res', viewValue: 'End Term Result' },
        {
          value: 'doc-combined-sem-res',
          viewValue: 'Combined Semester Result',
        },
      ],
    },
    {
      name: 'HOD',
      disabled: true,
      docType: [
        { value: 'doc-internal-res', viewValue: 'Internal Marks Result' },
      ],
    },
  ];

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.userRole = p['userRole'];
    });

    setTimeout(() => {
      this.helperService.hideLoader();
    }, 1500);
  }

  validDocument() {
    return true;
  }
}
