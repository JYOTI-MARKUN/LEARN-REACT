import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { useState } from "react"


import './App.css'
import { Themeprovider,applyTheme } from './components/contexts/themeContext'


const App = () => {
  // const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem("setIsDark")))
// applyTheme
  return (
    // <applyTheme.Provider value={ [isDark,setIsDark]}>
      <Themeprovider>
      <Header />
      <Outlet />
      </Themeprovider>
    
    // { </applyTheme.Provider> }
  )
}

export default App