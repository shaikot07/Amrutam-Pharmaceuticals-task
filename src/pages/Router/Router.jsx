import {
    createBrowserRouter,
    
  } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Home/Home/Home";


  export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        children:[
            {
                  path: "/",
                  element: <Home></Home>
            },
           
        ]
      },
  ]);