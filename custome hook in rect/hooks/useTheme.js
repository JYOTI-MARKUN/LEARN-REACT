import { useContext } from "react";
import { applyTheme } from "../components/contexts/themeContext";

// export function useTheme(){
//  const [isDark,setIsDark] = useContext(applyTheme);
//  return [isDark,setIsDark]
// }


// export function useTheme(){
//     return  useContext(applyTheme);
   
//    }

   export const useTheme = ()=>  useContext(applyTheme);
   