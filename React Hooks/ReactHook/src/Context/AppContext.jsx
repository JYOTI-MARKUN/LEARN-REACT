import { createContext } from "react";

// step one creating the context

// creating the context
export const AppContext = createContext();

// create a provider function that provide the data 

const ContextProvider = (props)=>{
    const phone = "+124356789";
    const name ="jyotimarkun"
   return (
 <AppContext.Provider value={{phone,name}}>
    {props.children}
 </AppContext.Provider>
   )
}

export default ContextProvider