import { configureStore } from "@reduxjs/toolkit";
import addToDoReducer from "./slice/addtodo";
export const store = configureStore({
  reducer: {
    toDoItems:addToDoReducer,
  },
});
