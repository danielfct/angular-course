import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';


@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html'
})
export class ApodComponent implements OnInit {

  apod: any = {};

  constructor(private apodService: ApodService) {
    this.apodService.apod$.subscribe(_ => {
      this.apod = this.apodService.getApod();
    });
  }

  ngOnInit(): void {
    this.apodService.requestApod();
  }

  onDateChange(date: string) {
    this.apodService.requestApod(date);
  }

}
