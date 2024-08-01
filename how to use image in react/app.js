
// function App(){
//     return <div>
//         Hellow React
//         <h3>Learn How to use image in react</h3>
//     </div>
// }

// export default App
// import Leftarrow from './assets/images/left-arrow.png';
import AppleCounter from './components/apple';
// console.log(Leftarrow);



const App = ()=>{
    return <div className='apple'>
        <h1 onClick={()=>{console.log("h")}}>hellow</h1>     
        <AppleCounter />
    </div>
}

export default App