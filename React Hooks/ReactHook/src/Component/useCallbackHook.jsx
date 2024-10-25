import { useCallback, useState } from "react"
import Header from "./Header"

export default function App5(){
    const [count,setCount] = useState(0)
    // const fun = ()=>{ }  when we click in the button count changes then state changes so component re-render this will create a new instance of this function every time and we are passing this new function in haeder every time so to avoid that we use useCallback hook in react

    const fun = useCallback(()=>{},[]) // this will not craete a new Function
    
    return (
        <>
         <Header fun={fun}/>  {/* we have imported haeder component here when we click on the button to increase the count it will re-render this component adn as it involves header component so it will also get rerender which should not be done so to avoid that we use Memo method that comes under the react package */}
        <h1>Count :{count}</h1>
        <button onClick={()=>setCount((prev)=> prev+1)}>Increase Count</button>
        </>
    )
}