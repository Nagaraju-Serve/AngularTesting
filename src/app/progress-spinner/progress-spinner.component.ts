import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css'],
})
export class ProgressSpinnerComponent implements OnInit {
  constructor() {}
  public showSpinner = false;
  public loadData(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
  ngOnInit(): void {}
}
