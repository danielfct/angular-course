import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private countries: any[] = [];
  private countriesNames: string[] = [];
  countriesNames$ = new BehaviorSubject<string[]>(this.countriesNames); 

  constructor(private http: HttpClient) { }

  getCountries() {
    this.http.get('https://restcountries.com/v3.1/all').subscribe((data: any) => {
        this.countries = data;
        let tempCountries: string[] = [];
        this.countries.forEach(country => {
          tempCountries.push(country.name.official);
        })
        this.countriesNames = [...tempCountries];
        this.countriesNames$.next(this.countriesNames);
        console.log(data);
      }, (error) => {
        console.log(error);
      }
    );
}

}
