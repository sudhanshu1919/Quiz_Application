import { createSlice } from "@reduxjs/toolkit";

const resultReducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    // Define your reducers here
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    clearResult: (state) => {
      state.result = [];
    },
  },
});

export const { setUserId, setResult, clearResult } = resultReducer.actions;

export default resultReducer.reducer;
