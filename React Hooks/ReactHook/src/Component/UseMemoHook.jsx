import { useMemo, useState } from "react"

export default function App4(){
    const [number,setNumber]= useState(0)
    const [counter,setCounter] = useState(0)

    function cubeOfNumber(num){
     console.log("calculation done")
     return Math.pow(num,3)
    }

    const cubeValue = useMemo(()=>{return  cubeOfNumber(number)},[number])

    return (
        <>
        <div>
        <input type="text" value = {number} onChange={(e)=>{setNumber(()=>e.target.value)}}/>
        <h1>Cube of the Number is : {cubeValue}</h1>
       <button onClick={()=>setCounter(counter+1)}>Counter++</button>  {/*  // when we increase the counter whne we click in the button tstae chnages and our component gets re-render so the code in the cube fucntion also run in the console so to avoid that we use useMemo hook in */}
        <h1>{counter}</h1>
        </div>
        </>
    )
}