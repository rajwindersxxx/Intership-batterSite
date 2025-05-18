import { configureStore } from "@reduxjs/toolkit";
import { calculatorSlice } from "./stores/calculaterSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
