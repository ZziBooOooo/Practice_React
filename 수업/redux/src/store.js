import { configureStore } from "@reduxjs/toolkit";
import { slice1, slice2 } from "./createSlice";

export const store = configureStore({
  // 규칙 -> 객체로 & counter은 내가 지어준 이름, testSlice가 import로 받아온 값
  reducer: { counter: slice1, counter2: slice2 },
});
