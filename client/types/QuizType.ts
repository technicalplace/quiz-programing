/** 
 * @remarks ジャンルの種類
 */
export type Language = 'React' | 'Vue' | 'Next.js' | 'TypeScript' | 'JavaScript' | 'CSS' | 'HTML' | 'PHP' | 'Laravel' | 'Python' | 'Java' | 'SQL' | 'Docker';

/**
 * @remarks 選択肢の型定義
 */
export type QuizOption = {
  // 選択肢のid
  id: string;
  // 選択肢のtext
  text: string;
}

/**
 * @remarks クイズの型定義
 */
export type Quiz = {
  // クイズのid
  id: number;
  // どの言語か
  language: Language;
  // 問題文
  question: string;
  // 選択肢
  option: Array<QuizOption>;
  // 正解の選択肢のid
  correctOptionId: string;
}

/**
 * @remarks クイズのリストの型定義
 */
export type QuizList = {
  [key in Language]: Quiz[];
}