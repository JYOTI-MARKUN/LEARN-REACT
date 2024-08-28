import { useEffect, useState } from "react";

export function useLocalStorage(key,initialData){
   const [data, setData] = useState(initialData)
  // storing the initial data in the local storage but when we do it,it store this data then below code runs newdata is stored in the localstorage, then we use setData this will rerender our page so again initial data is stored in our localstorage, so we need to check if we have data in our localstorage then set that data
//   const existingData = JSON.parse(localStorage.getItem(key))
//   if(existingData){
//    setData(existingData)  // now this will create inifity loop so recat ill through an error infinite number of rerenders
//   }

 useEffect(()=>{
   const existingData = JSON.parse(localStorage.getItem(key))
   if(existingData){
      setData(existingData) 
     }else{
      
  localStorage.setItem(key,JSON.stringify(initialData))
     }
 },[])

//   localStorage.setItem(key,JSON.stringify(initialData))
   
  // we need to pass the a argument that is need to pass new data 
  // when our state is depend on the previous state then we pass a callback function now newDtaa is a function, we can not stringyfy a function
  // so now we need to make code to handel a normal array or string or a function
   const updateLocalStorage = (newData)=>{
      if(typeof newData === 'function'){

         // localStorage.setItem(key,JSON.stringify(newData()))
         // in case of prevState we need to pass some Value to set the prevState
         localStorage.setItem(key,JSON.stringify(newData(data)))
      }else{

         localStorage.setItem(key,JSON.stringify(newData))
      }
   //  debugger
    setData(newData)
   }
   return [data,updateLocalStorage]
}