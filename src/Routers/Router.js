import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Resume from "../Pages/Resume";

 const Router = createBrowserRouter(
    [
    {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/resum',
            element:<Resume></Resume>
        }
    ]
    }
])
export default Router;