import { Quiz, Question, Answer } from '../types/QuizType';

export const generateQuiz = (quizData: any): Quiz[] => {
  return quizData.map((quiz: any, index: number) => {
    return {
      id: index,
      name: quiz.name,
      questions: generateQuestions(quiz.questions),
    };
  });
};

const generateQuestions = (questionsData: any): Question[] => {
  return questionsData.map((question: any, index: number) => {
    return {
      id: index,
      text: question.text,
      answers: generateAnswers(question.answers),
    };
  });
};

const generateAnswers = (answersData: any): Answer[] => {
  return answersData.map((answer: any, index: number) => {
    return {
      id: index,
      text: answer.text,
      isCorrect: answer.isCorrect,
    };
  });
};
