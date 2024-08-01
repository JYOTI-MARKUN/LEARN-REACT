import AppleCounter from './components/apple';
import Counter from './components/counter';
import { React } from "react";



const App = ()=>{
    return <div className='apple'>
        <h1 onClick={()=>{console.log("h")}}>hellow</h1>    
        <Counter /> 
        {/* <AppleCounter  /> */}
    </div>
}

export default App