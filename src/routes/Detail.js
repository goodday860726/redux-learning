import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

function Detail({todo, delTodo}) {
  return (
    <>
      <h1>{todo?.text}</h1>
      <h5>{todo?.id}</h5>
      <Link to={`/`}>
        <button onClick={delTodo}>Del</button>
      </Link>
    </>
  )
}

function mapStateToPorps(state, ownProps) {
  const { match: {params: { id }}} = ownProps
  return { todo: state.find(todo => todo.id === parseInt(id))};
}

function mapDispatchToProps(dispatch, ownProps) {
  const { match: {params: { id }}} = ownProps
  return { delTodo: () => dispatch(actionCreators.deleteTodo(id)) };
}

export default connect (mapStateToPorps,mapDispatchToProps) (Detail);
