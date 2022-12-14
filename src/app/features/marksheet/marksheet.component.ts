import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css'],
})
export class MarksheetComponent implements OnInit {
  doc = new jsPDF();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.helperService.hideLoader();
    }, 1500);
  }

  saveDiv(divId: string, title?: string) {
    let DATA: any = document.getElementById(divId);
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 20;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save(`${title ? title : 'result'}` + '.pdf');
    });
  }
}
