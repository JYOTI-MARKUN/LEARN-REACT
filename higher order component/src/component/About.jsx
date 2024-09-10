import React, { useState } from 'react'
// import {todos} from "./data.js"


export default function About() {
  const [todosList,setTodosList] = useState([])
  return (
  <>
    <h1>Hi, I am Jyoti Markun</h1>
    {/* <button onClick={()=>setTodosList(todos)}>Click To Load Data</button> */}
    <button onClick={()=>{
    import("./data").then((module)=>{
      setTodosList(module.todos)
    })
    }}>Click To Load Data</button>
    <ul>
      {
        todosList.map((todo)=> <li key={todo.id}>{todo.title}</li>)
      }
    </ul>
  </>
  )
}
