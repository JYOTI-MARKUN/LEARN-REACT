import React, { useEffect, useState } from "react";

export default function NewCounter(props) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

useEffect(()=>{
  console.log(document.querySelector("#newcounter-title")) 
  const timerId = setInterval(()=>{
  console.log("hi")
  },1000)

 return ()=>{
  console.log("cleanup function")
  clearInterval(timerId)
 }

},[])

  // useEffect(()=>{
  // console.log("useEffect");
  // console.log(document.querySelector("#newcounter-title"))
  // },[count])

  return (
    <>
    <h1 id="newcounter-title" >{props.name}</h1>
      <div className="flex text-center">
        <button
          onClick={() => setCount(count + 1)}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          +
        </button>
        <h1 className="m-2">
          Counter <span>{count}</span>
        </h1>
        <button
          onClick={() => setCount(count - 1)}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          -
        </button>
      </div>

      <div className="flex text-center">
        <button
          onClick={() => setCount1(count1 + 1)}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          +
        </button>
        <h1 className="m-2">
          Counter <span>{count1}</span>
        </h1>
        <button
          onClick={() => setCount1(count1 - 1)}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          -
        </button>
      </div>
    </>
  );
}
