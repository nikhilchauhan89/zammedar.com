import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/TodoSlice'
// import todoReducer from '../features/todo/TodoSlice';

const Todo = () => {
  const todos = useSelector(state => state.todo)
  console.log(todos)
  const dispatch = useDispatch()
  // console.log(dispatch)
  return (
    <>
      <div>Todos</div>
      {todos?.todos.map((todo) => (

        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}

    </>
  )
}

export default Todo