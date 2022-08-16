import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/TopicSlice";
const quizSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

export const addQuizForTopicId = (quiz) => {
  const { topicId, id } = quiz;

  console.log(quiz);
  return (dispatch) => {
    dispatch(quizSlice.actions.addQuiz(quiz));
    dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;
