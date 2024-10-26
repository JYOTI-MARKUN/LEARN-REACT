import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

export default function Footer(){

    // step three consuming the context
    const {phone,name} = useContext(AppContext)
    return (
        <>
        <h2>I am Footer</h2>
        <h3>Phone:{phone}</h3>
        <h3>Name:{name}</h3>
        </>
    )
}