import { createSlice } from "@reduxjs/toolkit";

// Stateの初期状態
const initialState = {
  quizList: [],
  currentQuizId: 1,
  selectedOption: {},
}
// Sliceを生成する
const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setQuizList: (state, action) => {
      state.quizList = action.payload;
    },
    // 選択した回答を管理する
    setAnswerInfo: (state, action) => {

    },
    // 次の問題へボタン
    toNextButton: (state) => {
      if (state.currentQuizId === state.quizList.length) return;
      state.currentQuizId++;
    },
    // 前の問題へボタン
    toPrevButton: (state) => {
      if (state.currentQuizId === 1) return;
      state.currentQuizId--;
    }
  },
})
// Reducerをエクスポートする
export default answerSlice.reducer;
// Action Creatorsをエクスポートする
export const { setQuizList, setAnswerInfo, toNextButton, toPrevButton } = answerSlice.actions;