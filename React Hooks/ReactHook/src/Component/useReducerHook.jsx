import { useState } from "react"

export default function App7(){

const [count, setCount] = useState(0)

    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(prev=>prev+1)}}>Increase</button>
        <button onClick={()=>{setCount(prev=>prev-1)}}>Decrease</button>
        </>
    )
}