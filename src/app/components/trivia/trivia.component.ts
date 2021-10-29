import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {

  questions: Question[] = [];
  loading: boolean = true;
  score: number = 0;

  constructor(private triviaService: TriviaService) { }

  ngOnInit(): void {
    this.triviaService.trivia$.subscribe(questions => {
      this.questions = questions;
      if (this.questions.length > 0) {
        this.loading = false;
      }
    });
    this.triviaService.getQuestions();
  }

  onAnswer(correct: boolean) {
    if (correct) {
      this.score++;
    }
    else {
      this.score--;
    }
  }

  scoreClass = () => this.score === 0 ? "" : this.score > 0 ? "text-success" : "text-danger";

}
