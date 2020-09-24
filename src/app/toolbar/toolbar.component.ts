import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}
  public opened = false;
  log(state: any): void {
    console.log(state);
  }
  ngOnInit(): void {}
}
