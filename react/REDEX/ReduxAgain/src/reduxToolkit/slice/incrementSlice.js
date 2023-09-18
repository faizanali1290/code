// import { createAction, createSlice } from "@reduxjs/toolkit";
// const increaseByAmount = createAction("incrementByTwo/coustomeReducer");
// const initialState = {
//   amount: 10,
// };
// const incrementSlice = createSlice({
//   name: "info",
//   initialState,
//   reducers: {
//     increment: (state, action) => {
//       state.amount += 1;
//     },
//     decrement: (state, action) => {
//       state.amount -= 1;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(increaseByAmount, (state, action) => {
//       console.log(action)
//       state.value += 10;

//       // console.log(state);
//     });
//   },
// });

// export const { increment, decrement } = incrementSlice.actions;
// export const Incrementreducer = incrementSlice.reducer;
import { createAction, createSlice } from "@reduxjs/toolkit";

const increaseByAmount = createAction("1");

const initialState = {
  amount: 10,
};

const incrementSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.amount += 1;
    },
    decrement: (state, action) => {
      state.amount -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(increaseByAmount, (state, action) => {
      if (+state.amount >= 30) {
        state.amount += 1;
        return;
      }

      return;
    });
  },
});

export const { increment, decrement } = incrementSlice.actions;
export const Incrementreducer = incrementSlice.reducer;
