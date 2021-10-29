import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html'
})
export class DisplayComponent implements OnInit {

  @Input() displayValue = '';

  constructor() { }

  ngOnInit(): void {
  }

}
