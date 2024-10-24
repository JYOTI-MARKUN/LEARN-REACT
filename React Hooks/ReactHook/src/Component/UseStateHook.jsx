import "../App.css";
import { useState } from "react";

export default function App() {

  // const counter = useState(0)
  // console.log(counter)
  let [color,setColor] =useState("Red")

  // let color = "Red"
  const changeColor = ()=>{
   setColor( "Blue")
    console.log(color) //when we click in the button this code will give color value in console but it will not update the UI because react depend on state management to rerender a component for this we have to use useState hook
  }

// USESTATE HOOK WHEN STATE UPDATE DEPEND ON THE PREVIOUS STATE
  // const [brand,setBrand] =useState("Ferrari")
  // const [model,setModel] =useState("Roma")
  // const [year,setYear] =useState("2023")
  // const [color,setColor] =useState("Red")
  const [car,setCar] =useState({
    brand:"Ferrari",
    color:"Red",
    model:"Roma",
    year:2023
  })

  const changeCarColor =()=>{
    setCar((prev)=>{
      return {...prev,color:"Blue"}
    })
  }

  // USESTATE HOOK WHEN STATE UPDATE DEPEND ON THE PREVIOUS STATE
  const [count,setCount] = useState(0)

  const increaseCount = ()=>{
    
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
  }

  return <>
<div>
<h1>My fav color is {color}</h1>
<button onClick={changeColor}>Blue</button>
</div>
  <div>
  <h1>My {car.brand}</h1>
    <h2>It is a {car.color} {car.model} from {car.year}</h2>
    <button onClick={changeCarColor}>Blue</button>
  </div>
  <div>
    <h1>Count:{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
  </div>
  </>;
}


