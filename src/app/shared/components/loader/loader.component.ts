import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements AfterViewInit {
  @ViewChild('loaderr') loadingDiv: ElementRef;

  constructor(private helperService: HelperService) {}

  ngAfterViewInit(): void {
    console.log(this.loadingDiv);
    this.helperService.isLoading.subscribe((res) => {
      if (!res) {
        this.loadingDiv.nativeElement.style.display = 'none';
      }
    });
  }
}
