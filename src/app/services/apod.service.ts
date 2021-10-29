import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  API_KEY = 'kZKvAca3MqUNCPv01JJxxt2PCrmeGs3Srb1U7qyS';
  private apod?: any = undefined;
  apod$ = new BehaviorSubject<any>(this.apod);

  constructor(private http: HttpClient) {
  }

  requestApod(date?: string): void {
    /*if (!this.apod
      || this.apod.date !== new Date().toISOString().slice(0, 10)
      || this.apod.date.toISOString().slice(0, 10) !== date) {*/
      let url = `https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`;
      if (date) {
        url += `&date=${date}`;
      }
      this.http.get(url).subscribe(data => {
        this.apod = data;
        this.apod$.next(this.apod);
        console.log(data);
      }, error => {
        console.log(error)
      })
    /*}*/
  }

  getApod() {
    return {...this.apod};
  }
}
