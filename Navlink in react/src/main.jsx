import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';

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

createRoot(document.getElementById('root')).render(
  <>

  <RouterProvider router={router} />
  </>
)
