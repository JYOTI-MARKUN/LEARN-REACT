import Button from "./image"
import Leftarrow from '../assets/images/left-arrow.png';
import Rightarrow from '../assets/images/right-arrow.png';
import Basket from "./applebasket";


import {createRoot} from 'react-dom/client';

const root = createRoot(document.querySelector("#root"));




const TotalAppleCount = 10;    
let AppleinBasketOne = 10;
let AppleinBasketTwo = TotalAppleCount - AppleinBasketOne

const AppleCounter = ()=>{

    const LeftClickHandler = ()=>{
        console.log("left arrow is clicked")
        if(AppleinBasketTwo>0){

            AppleinBasketOne++;
            AppleinBasketTwo--;
            root.render(<AppleCounter />)
        }
    }
    const RightClickHandler = ()=>{
        console.log("right arrow is clicked")
        if (AppleinBasketOne>0){

            AppleinBasketOne--;
            AppleinBasketTwo++;
            root.render(<AppleCounter />)
        }
        console.log(AppleinBasketOne);
        console.log(AppleinBasketTwo);
    }
    return <>
    <div className="apple-basket-counter">
        <Basket  Applecount={AppleinBasketOne} Basketno={1}/>
        <Button clickable={LeftClickHandler} imageUrl={Leftarrow} title = "Left" arrowName="Left-arrow" />
        <Button clickable={RightClickHandler} imageUrl={Rightarrow} title= "right" arrowName="right-arrow" />
        <Basket Applecount={AppleinBasketTwo} Basketno={2}/>
    </div>
    <p style={{textAlign:"center", margintop:"150px"}}>
        <button >Re - Render</button>
    </p>
        </>
}

export default AppleCounter