"use client"

import React, { useState, useEffect } from 'react';
import { Quiz } from '../components/Quiz';
import { Question } from '../types/QuizType';
// import { fetchQuizQuestions } from './utils/quizUtils';
import { QuizSection } from '../components/QuizSection';
import '../global.css';
import { Header } from '../components/organisms/Header';
import { Categories } from '../components/molecules/Categories';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { AuroraBackground } from '@/components/ui/AuroraBackground';

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  useEffect(() => {
    startTrivia();
  }, []);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    // const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS);

    // setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      // const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      // if (correct) setScore(prev => prev + 1);
      // Save answer in the array for user answers
      setUserAnswers(prev => [...prev, answer]);
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  const router = useRouter()
  const searchParams = useParams()
  const pathName = usePathname()

  return (
    <AuroraBackground>
      <Header />
      <Categories />
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="text-text-white" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {gameOver ? null : <p className="text-text-white">Score: {score}</p>}
      {loading && <p>Loading Questions...</p>}
      {/* {!loading && !gameOver && (
        <Quiz
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )} */}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </AuroraBackground>
  );
};

export default App;