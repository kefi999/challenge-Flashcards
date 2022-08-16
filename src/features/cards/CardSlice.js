import { createSlice, CreateSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload;

      state.cards[id] = action.payload;
    }
  }
});

export const { addCard } = cardSlice.actions;
export const selectCards = (state) => state.cards.cards;
export default cardSlice.reducer;
