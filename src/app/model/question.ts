export class Question {
    category: string;
     type: string;
        difficulty: string;
    question: string;
    correctAnswer: string;
    incorrectAnswers: string[];
    answers: string[];
    constructor(json?: any) {
      this.category = json?.category;
      this.type = json?.type;
      this.difficulty = json?.difficulty;
      this.question = json?.question;
      this.correctAnswer = json?.correct_answer;
      this.incorrectAnswers = json?.incorrect_answers;
      this.answers = [this.correctAnswer, ...this.incorrectAnswers || []];
      shuffleArray(this.answers);
    }
  }


function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}