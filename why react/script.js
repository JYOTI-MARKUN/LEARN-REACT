const leftArrow = document.querySelector(".left-arrow img");
const rightArrow = document.querySelector(".right-arrow img");
const basketOne = document.querySelector(".basket-one span");
const baskettwo = document.querySelector(".basket-two span");


let ApplesInBasketOne = 100;
let ApplesInBasketTwo = 0;

basketOne.innerText = ApplesInBasketOne;
baskettwo.innerText = ApplesInBasketTwo;


leftArrow.addEventListener("click",(e)=>{
   if(ApplesInBasketTwo>0){
    ApplesInBasketOne += 1;
    basketOne.innerText = ApplesInBasketOne;
   ApplesInBasketTwo -=1;  
    baskettwo.innerText = ApplesInBasketTwo;
   }  
})


rightArrow.addEventListener("click",(e)=>{
    if(ApplesInBasketOne>0){
     ApplesInBasketOne -= 1;
     basketOne.innerText = ApplesInBasketOne;
    ApplesInBasketTwo +=1;    
    baskettwo.innerText = ApplesInBasketTwo;
    }  
 })
