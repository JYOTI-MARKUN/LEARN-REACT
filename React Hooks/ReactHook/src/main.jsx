import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Component/UseStateHook'
import App2 from './Component/UseEffectHook'
import App3 from './Component/UseRefHook'


createRoot(document.getElementById('root')).render(
 
<>
{/* <App />
  <App2/> */}
  <App3/>
 
</>
)
