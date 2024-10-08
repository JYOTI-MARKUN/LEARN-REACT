import { useState } from "react"

export default function Button(){
    const [text,setText] = useState("Click Me")
    return <button className="btn" onClick={()=>setText("Text is changed")}> {text}</button>
}