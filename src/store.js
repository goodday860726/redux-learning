import { configureStore, createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({text: action.payload, id: Date.now()})
    },
    remove: (state, action) => state.filter(todo => todo.id !== action.payload)
  }
})

export const { add, remove } = todos.actions

export default configureStore({reducer: todos.reducer});