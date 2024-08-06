import { createContext, useState } from "react";

// const [a,setA] = useStatete("hh")

export const applyTheme  = createContext("")

export function Themeprovider ({children}){
console.log(children)
    const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem("setIsDark")))

    return (
        <applyTheme.Provider value={[isDark,setIsDark]}>{children}</applyTheme.Provider>
    )
}