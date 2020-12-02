import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type){
    case addTodo.type:
      const id = Date.now();
      localStorage.setItem(id, action.text);
      return [{text: action.payload, id}, ...state];
    case deleteTodo.type:
      localStorage.removeItem(action.payload)
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

const store = createStore(reducer)

export const actionCreators = {
  addTodo,
  deleteTodo
}

export default store;