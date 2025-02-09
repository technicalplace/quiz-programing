/**
 * @remarks 回答の型定義
 * @typeParam id -> 回答のid
 * @typeParam text -> 回答のtext
 * @typeParam isCorrect -> true:正解 false:不正解
 */
export type Answer = {
  id: number;
  text: string;
  isCorrect: boolean;
}
/**
 * @remarks 問題文の型定義
 * @typeParam id -> 問題文のid
 * @typeParam text -> 問題文のtext
 * @typeParam answers -> 型Answerの配列
 */
export type Question = {
  id: number;
  text: string;
  answers: Answer[];
}
/**
 * @remarks クイズの型定義
 * @typeParam id -> クイズのid
 * @typeParam name -> クイズのname
 * @typeParam questions -> 型Questionの配列
 */
export type Quiz = {
  id: number;
  name: string;
  questions: Question[];
}