import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  private questions: Question[] = [];
  trivia$ = new BehaviorSubject<Question[]>(this.questions); 

  constructor(private http: HttpClient) { }

  getQuestions() {
    this.http.get('https://opentdb.com/api.php?amount=10').subscribe((data: any) => {
        let tmp: Question[] = [];
        tmp = data.results.map((json:any) => new Question(json));
        this.questions = [...tmp];
        this.trivia$.next(this.questions);
        console.log(data);
      }, (error) => {
        console.log(error);
      }
    );
  }
}
