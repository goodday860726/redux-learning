import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  }
};

const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [ {text: action.text, id: Date.now()}, ...state ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {console.log(store.getState())});

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text))
};

const dispatchDeleteTodo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
}

const printTodos = () => {
  const todos = store.getState();
  ul.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.id = todo.id;
    li.innerHTML = todo.text;
    btn.innerHTML = "DEL";
    btn.addEventListener("click", dispatchDeleteTodo);
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

store.subscribe(printTodos);


const onSubmit = e => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  dispatchAddTodo(todo)
};


form.addEventListener("submit", onSubmit);