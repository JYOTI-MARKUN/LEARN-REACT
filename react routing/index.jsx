import {createRoot} from 'react-dom/client'
import App from './app.jsx'
import Contact from './components/ContactUs.jsx';
import CountryDetail from './components/CountryDetail.jsx';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './components/home.jsx';
import Error from './components/Error.jsx';




  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement:<Error/>,
      children: [        
        {
            path: "/",
            element: <Home />,
          },
        {
            path: "/ContactUs",
            element: <Contact />,
          },
          {
            path: "/:Country",
            element: <CountryDetail />,
          },
            

        //   {
        //     path: "/aboutus",
        //     element: <div>About Us</div>
        //   },
        
      ]
    },
   
  ]);

const root = createRoot(document.querySelector('#root'));
root.render(
<>
{/* <Header /> */}
<RouterProvider router={router} />
</>
)