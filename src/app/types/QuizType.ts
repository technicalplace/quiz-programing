export interface Quiz {
  id: number;
  name: string;
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}
