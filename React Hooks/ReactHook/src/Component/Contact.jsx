import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

export default function Contact(){
    const{ phone }= useContext(AppContext)
    return (
        <>
        <h2>I am Contact Page</h2>
        <h3>Phone:{phone}</h3>
        </>
    )
}