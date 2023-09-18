import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
// import { useDispatch } from "react-redux";

const fetchdat = createAsyncThunk("apidata", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return data;
});

const apiSlice = createSlice({
  name: "apidata",
  initialState: {
    value: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdat.fulfilled, (state, action) => {
        state.value = action.payload;
        state.pending = false;
      })
      .addCase(fetchdat.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(fetchdat.rejected, (state, action) => {
        state.pending = true;
      });
  },
});
export const api = apiSlice.reducer;
export default fetchdat;
// fetchdat(1)
// give first argument to give action name
