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
    
    <div className='overall-container'>
    
    <div className='mytodo-container'>
      
    <div className='input-button-container'>
        <input
        type='text'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
         />
        <button onClick={addTodo} >Add </button>
      </div>
      <h1>Today's Task</h1>
      <ul>
        {todos.map((myTodo, index)=>(
            <li key={index}>
              {myTodo}
            </li>
        ))}
      </ul>
    </div>
     
    </div>
  )
}

export default Todo

