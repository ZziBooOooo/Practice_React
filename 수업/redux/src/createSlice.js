import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = { count: 100 };

const testSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.count += action.payload;
    },
    decrement(state, action) {
      state.count -= action.payload;
    },
  },
});

const initialState2 = { count2: 100 };

const testSlice2 = createSlice({
  name: "counter2",
  initialState: initialState2,
  reducers: {
    multiply(state, action) {
      state.count2 *= action.payload;
    },
    divide(state, action) {
      state.count2 /= action.payload;
    },
  },
});

const { increment, decrement } = testSlice.actions;
const { multiply, divide } = testSlice2.actions;
const slice1 = testSlice.reducer;
const slice2 = testSlice2.reducer;

export { slice1, slice2, increment, decrement, multiply, divide };
