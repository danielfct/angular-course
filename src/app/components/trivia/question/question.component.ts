import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question = new Question();
  @Output() onAnswer = new EventEmitter<boolean>();

  answered: string = '';
  correct: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  answerQuestion(answer: string): void {
    this.answered = answer;
    this.correct = answer === this.question.correctAnswer;
    this.onAnswer.emit(this.correct);
}

difficultClass() {
  let colorClass = '';
  if (this.question.difficulty === "easy") {
    colorClass = "text-success";
  }
  else if (this.question.difficulty === "medium") {
    colorClass = "text-warning";
  }
  else if (this.question.difficulty === "hard") {
    colorClass = "text-danger";
  }
  return colorClass + " text-capitalize";
}

buttonClass(answer: string): string {
    if (this.answered === this.question.correctAnswer && this.answered === answer) {
      return "btn-success";
    }
    else if (this.answered && answer === this.question.correctAnswer) {
      return "btn-danger";
    }
  return "";
}

}
