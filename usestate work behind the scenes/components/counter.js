import { React, useState } from "react";
export default function Counter() {
  const states = [0,"HI, i am jyoti MArkun"]
  const [count, setcount] = useState(0);
  const [name, setname] = useState("HI, i am jyoti MArkun");
  console.log("rendering");
  console.log(count); // initialcount is zero as we have passed, now everytime of re-rendering counter function is called again so useState should get 0 value every time but usetate is a special function it remember how many time it is called, will update the passed value
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          // setcount(count+5);
          // setcount(count+5);
          // setcount(count+1);
          setcount((previousState)=>{return previousState+1});         
          setcount((previousState)=>{return previousState+1});         
          setcount((previousState)=>{return previousState+1});         
         
          setname("i am good");         
          console.log(count+1);
          
          console.log(name);
        }}
      >
        Increase Count
      </button>
    </div>
  );
}
