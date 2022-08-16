import { createSlice } from "@reduxjs/toolkit";
import Topics from "./Topics";

const topicSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      // const topics = {
      //   [action.payload.id]: {
      //     id: action.payload.id,
      //     name: action.payload.name,
      //     icon: action.payload.icon,
      //     quizIds: []
      //   }
      // };
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    },
    addQuizIdForTopic: (state, action) => {
      const { topicId, quizId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

export const topicSelector = (state) => state.topics.topics;

export const { addTopic, addQuizIdForTopic } = topicSlice.actions;
export default topicSlice.reducer;
