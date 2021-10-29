import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html'
})
export class TypeaheadComponent implements OnInit {

  public model: any;
  countriesNames: string[] = [];
  countriesLoading: boolean = true;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.countriesNames$.subscribe(countries => {
      this.countriesNames = countries;
      if (this.countriesNames.length > 0) {
        this.countriesLoading = false;
      }
    });
    this.countriesService.getCountries();
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.countriesNames.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


}
