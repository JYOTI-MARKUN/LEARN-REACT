import { React, useState } from "react";
export default function Counter(){
    const [initialCount,setinitialCount] = useState(0);
    console.log("rendering");
    
    console.log(initialCount); // initialcount is zero as we have passed, now everytime of re-rendering counter function is called again so useState should get 0 value every time but usetate is a special function it remember how many time it is called, will update the passed value

    // const initialCount = myStateArray[0];
    // const setinitialCount = myStateArray[1];
    // console.log(finalCount)

    return   <div style={{textAlign:"center"}}>
        <h1 >{initialCount}</h1  >
        <button onClick={()=>{setinitialCount(initialCount+1); console.log(initialCount)}}>Increase Count</button></div>
    
}