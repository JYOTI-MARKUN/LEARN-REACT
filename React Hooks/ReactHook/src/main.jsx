import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Component/UseStateHook'
import App2 from './Component/UseEffectHook'
import App3 from './Component/UseRefHook'
import App4 from './Component/UseMemoHook'
import App5 from './Component/useCallbackHook'
import App6 from './Component/useContextHook'
import ContextProvider from './Context/AppContext'
import App7 from './Component/useReducerHook'


createRoot(document.getElementById('root')).render(
 
<>
{/* <App />
  <App2/>
  <App3/> */}
  {/* <App4/> */}
  {/* <App5/> */}

  {/* step two providing the context */}
 {/* <ContextProvider>
 <App6/>
 </ContextProvider> */}
 <App7 />
</>
)
