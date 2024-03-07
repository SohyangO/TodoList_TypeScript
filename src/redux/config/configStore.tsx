import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todosSlice.tsx";

const store = configureStore({
  reducer: { todos: todos },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
