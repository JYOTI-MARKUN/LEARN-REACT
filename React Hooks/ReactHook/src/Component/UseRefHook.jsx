import { useEffect, useRef, useState } from "react"
import"../App.css"

export default function App3(){

   const [value,setValue]=useState(0)
   const count = useRef(0)  
   console.log(count) // it is an object that have an element current that hold the starting value
  console.log(count.current)
   useEffect(()=>{
    count.current=  count.current+1
   })

// useRef Hook to access the DOM element
const inputElement = useRef();
console.log(inputElement.current)

function changeStyle(){

    inputElement.current.style.backgroundColor = "Pink"
    inputElement.current.style.border = "2px solid pink"
    console.log(inputElement)
}


    return(
        <>
     <div>
     <button onClick={()=>{setValue((prev)=>prev-1)}}>-</button>
        <h1>
            Count:{value}
        </h1>
        <button onClick={()=>{setValue((prev)=>prev+1)}}>+</button>
        <h2>The component re-renders {count.current} times</h2>
     </div>
     <div>
        <input type="text" ref={inputElement}/>
        <button onClick={changeStyle}>Click Here</button>
     </div>
        </>
    )
}