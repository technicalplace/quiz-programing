import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Stateの初期状態
const initialState = {
  quizList: [],
  currentQuizId: 1,
  selectedOptions: [] as { id: number; answer: string; }[],
}
// Sliceを生成する
const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: (create) => ({
    // 選択された言語のクイズをセットする
    setQuizList: (state, action) => {
      state.quizList = action.payload;
    },
    // 選択した回答を管理する
    setAnswerInfo: create.preparedReducer(
      (currentQuizId: number, text: string) => {
        const selectedAnswer = {
          id: currentQuizId,
          answer: text,
        }
        return {payload: {selectedAnswer}}
      },
      (state, action) => {
        const { id, answer } = action.payload.selectedAnswer;
        const existingOptionIndex = state.selectedOptions.findIndex(option => option.id === id);
        existingOptionIndex === -1
          // 初めて回答する場合、選択肢を追加する
          ? state.selectedOptions.push({ id, answer })
          // 回答済みの問題の場合、選択肢だけ更新する
          : state.selectedOptions[existingOptionIndex].answer = answer;
      }
    ),
    // 次の問題へボタン
    toNextButton: (state) => {
      if (state.currentQuizId === state.quizList.length) return;
      state.currentQuizId++;
    },
    // 前の問題へボタン
    toPrevButton: (state) => {
      if (state.currentQuizId === 1) return;
      state.currentQuizId--;
    },
    // stateを初期状態に戻す
    clearStore: (state) => {
      state.quizList = [];
      state.currentQuizId = 1;
      state.selectedOptions = [];
    }
  }),
})
// Reducerをエクスポートする
export default answerSlice.reducer;
// Action Creatorsをエクスポートする
export const { setQuizList, setAnswerInfo, toNextButton, toPrevButton, clearStore } = answerSlice.actions;