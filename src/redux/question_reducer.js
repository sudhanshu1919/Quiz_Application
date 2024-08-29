import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
    tace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      state.queue = action.payload;
    },
  },
});

export const { startExamAction } = questionReducer.actions;

export default questionReducer.reducer;
