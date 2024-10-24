import "../App.css";
import { useEffect, useState } from "react"
export default function App2(){
    const [count,setCount] = useState(0)

    // useEffect(()=>{
    //     setTimeout(()=>{
    //      setCount((prev)=>prev+1)
    //     },2000)
    // })  // when we do not pass any dependency array then the useEffect will update component every time a state is update and as count is updating in every 2 second so it will re-render our coponent in every 2 times

    // useEffect(()=>{
    //     setTimeout(()=>{
    //      setCount((prev)=>prev+1)
    //     },2000)
    // },[])  // wlll update the UI only one time when we pass a empty array as dependency array

    useEffect(()=>{
        setTimeout(()=>{
         setCount((prev)=>prev+1)
        },2000)
    },[count])  // update whenever count changes

    return(
        <>
        <h1>I'have updated {count} times!</h1>
        </>
    )
}