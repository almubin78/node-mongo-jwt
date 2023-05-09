import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Orders from "../component/Orders/Orders";
import Login from "../component/Login/Login";
import Congraculation from "../component/AfterLogin/Congraculation";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'/orders',
                element:<Orders/>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/cong',
                element:<Congraculation></Congraculation>
            }
        ]

    }
])
export default router;