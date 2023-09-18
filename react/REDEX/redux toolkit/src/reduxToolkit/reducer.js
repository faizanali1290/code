import { createAction, createReducer } from "@reduxjs/toolkit";

export const incrementByTwo = createAction("1");
const initialState = {
  value: 1,
};

const coustomeReducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementByTwo, (state, action) => {
    // state.value += 2;
    state.value += 10;
  });
});

export { coustomeReducer };
