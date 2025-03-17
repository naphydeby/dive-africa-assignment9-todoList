import React from 'react'
import { useState } from 'react'
const Todo = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const addTodo = ()=>{
        if(!todo.trim()) return;
        setTodos([...todos, todo])
        setTodo('')
    }

  return (
    
    <>
      <div>
        <input
        type='text'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
         />
        <button onClick={addTodo} >Add Todo</button>
      </div>
      <ul>
        {todos.map((myTodo, index)=>(
            <li key={index}>
              {myTodo}
            </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
