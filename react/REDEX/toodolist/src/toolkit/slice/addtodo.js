import { createSlice } from "@reduxjs/toolkit";

const sliceReducer = createSlice({
  name: "todo",
  initialState: [],

  reducers: {
    addToDo: (state, action) => {
      state.push({ items: action.payload, isComplted: false });
    },
    removeAllTodo: (state) => {
      return (state = []);
    },
    removetodo: (state, action) => {
      const filter = state.filter((items, index) => {
        return action.payload !== index;
      });
      return filter;
    },
    doneToDo: (state, action) => {
      return state.map((item, i) => {
        if (i === action.payload) {
          return { ...item, isCompleted:!item.isCompleted };
        }
        return item;
      });
    },
  },
});

export const { addToDo, removeAllTodo, removetodo, doneToDo } =
  sliceReducer.actions;
export default sliceReducer.reducer;
