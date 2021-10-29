import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-date-apod',
  templateUrl: './date-apod.component.html'
})
export class DateApodComponent implements OnInit {
  @Output() dateChanged = new EventEmitter();

  today: Date = new Date();
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onDateChanged(year: number, month: number, day: number) {
    const date = year + "-" + month + '-' + day;
    this.dateChanged.emit(date);
  }
}
