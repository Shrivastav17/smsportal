import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import AddLibrary from "./Components/AddLibrary";
import AddGroup from "./Components/AddGroup";
import AddMessage from "./Components/AddMessage";
import AddContact from "./Components/AddContact";

import Home from "./Components/Home";
import SendSMS from "./Components/SendSMS";


const customroute = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/add-library',
            element:<AddLibrary></AddLibrary>
        },
        {
            path:'/add-group',
            element:<AddGroup></AddGroup>
        },
      
        {
            path:'/add-contact',
            element:<AddContact></AddContact>
        },
        {
            path:'/add-message',
            element:<AddMessage></AddMessage>
        },
        {
            path:'/sms',
            element:<SendSMS></SendSMS>
        }
      
    ]
}
])

export default customroute;


