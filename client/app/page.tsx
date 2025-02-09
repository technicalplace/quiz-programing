"use client"

import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { useEffect, useState } from 'react';
import { Categories } from '../components/molecules/Categories';
import { Header } from '../components/organisms/Header';
import '../global.css';
import { Question } from '../types/QuizType';

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
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <Header />
      <Categories />
    </>
  );
};

export default App;