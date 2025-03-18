import React from 'react'
import { useState } from 'react'
import './todo.css'
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
    <div className='mytodo-container'>
      <h1>My Daily Task</h1>
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
    </div>
     
    </>
  )
}

export default Todo
