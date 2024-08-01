import Button from "./image"
import {React } from 'react'
import Leftarrow from '../assets/images/left-arrow.png';
import Rightarrow from '../assets/images/right-arrow.png';
import Basket from "./applebasket";
import { useState } from "react";


 
// let AppleinBasketOne = 10;
// let AppleinBasketTwo = TotalAppleCount - AppleinBasketOne

const AppleCounter = ()=>{
    const TotalAppleCount = 10;   
    const [LeftBasketApple,setLeftBasketApple] = useState(0);
    const [RightBasketApple,setRightBasketApple] = useState(TotalAppleCount-LeftBasketApple);

    const LeftClickHandler = ()=>{

        console.log("left arrow is clicked")
        if(RightBasketApple>0){
            setLeftBasketApple(LeftBasketApple+1);
            setRightBasketApple(RightBasketApple-1);
            
        }
    }
    const RightClickHandler = ()=>{
        console.log("right arrow is clicked")
        if (LeftBasketApple>0){
            setLeftBasketApple(LeftBasketApple-1);
            setRightBasketApple(RightBasketApple+1);
         
        }
        // console.log(AppleinBasketOne);
        // console.log(AppleinBasketTwo);
    }
    return <>
    <div className="apple-basket-counter">
        <Basket  Applecount={LeftBasketApple} Basketno={1}/>
        <Button clickable={LeftClickHandler} imageUrl={Leftarrow} title = "Left" arrowName="Left-arrow" />
        <Button clickable={RightClickHandler} imageUrl={Rightarrow} title= "right" arrowName="right-arrow" />
        <Basket Applecount={RightBasketApple} Basketno={2}/>
    </div>
    <p style={{textAlign:"center", margintop:"150px"}}>
        <button >Re - Render</button>
    </p>
        </>
}

export default AppleCounter