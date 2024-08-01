import AppleCounter from './components/apple';
import Counter from './components/counter';
import { React } from "react";



const App = ({root})=>{
    return <div className='apple'>
        <h1 onClick={()=>{console.log("h")}}>hellow</h1>    
        {/* <Counter /> */} 
        <AppleCounter root = {root} />
    </div>
}

export default App