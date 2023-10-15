import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Home/Home";
import TimePick from "../TimePicker/TimePick";
// import Shop from "../Shop/Shop";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path:"/",
            // element: <Shop></Shop>
            element:<TimePick></TimePick>
        }
      ]
    },
  ]);

  export default router;