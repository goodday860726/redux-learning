import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import Todo from "../components/Todo"

function Home({todos, addTodo}) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setText("");
    addTodo(text);
  }
  return (
    <>
      <h1>To Do</h1> 
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul>{todos.map(todo => <Todo {...todo} key={todo.id} /> )}</ul>
    </>
  )
}

function mapStateToProps(state) {
  return {todos: state};
};

function mapDispatchToProps(dispatch) {
  return {addTodo: (text) => dispatch(add(text))}
}

export default connect (mapStateToProps, mapDispatchToProps) (Home);
