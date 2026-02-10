import React from 'react'
import { removeTodo } from '../todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {
     const todos = useSelector(state=> state.todos)
     console.log(todos);
     const dispatch = useDispatch()
  return (
    <>
    <div>Todos</div>
    {todos.map((todo)=>{
        return(
        <li key={todo.id}>

            {todo.text}
            <button onClick={()=>dispatch(removeTodo(todo.id))}>delete</button>
        </li>
        )   
        
        
})}

    </>
  )


}

export default Todo