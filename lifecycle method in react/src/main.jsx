import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from './About.jsx';
// import Contact from './Contact.jsx';
import Home from './Home.jsx';
import { lazy } from 'react';

const About = lazy(()=> wait(1000).then(()=>import('./component/About.jsx')))
const Contact = lazy(()=> wait(1000).then(()=>import('./Contact.jsx').then((module)=>{
return {default:module.Contact}
})))




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [        
      {
          path: "/",
          element: <Home/>,
        },
      {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },     
     
    ]
  },
 
]);

const wait=(time)=>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve()
    },time)
  })
}

createRoot(document.getElementById('root')).render(
  <>

  <RouterProvider router={router} />
  </>
)
