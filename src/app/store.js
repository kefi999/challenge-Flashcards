import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/TopicSlice";
import quizzesReducer from "../features/quizzes/QuizSlice";
import cardsReducer from "../features/cards/CardSlice";
const store = configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer,
  },
});

export default store;
