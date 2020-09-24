import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  constructor() {}
  public selectedValue: string;
  public options: string[] = ['Angular', 'React', 'Vue'];

  objectOptions: any[] = [
    {
      name: 'Angular',
    },
    {
      name: 'React',
    },
    {
      name: 'Vue',
    },
    {
      name: 'Angular Material',
    },
  ];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  displayFn(subject: any): void {
    return subject ? subject.name : undefined;
  }
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
