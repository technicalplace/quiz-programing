import { configureStore } from "@reduxjs/toolkit";
import answerReducer from './answer'

export const store = configureStore({
  reducer: {
    answer: answerReducer,
  }
})