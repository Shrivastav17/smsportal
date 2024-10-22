import React from "react";
import ReactDOM from 'react-dom/client';

import 'react-bootstrap';


import { Provider } from 'react-redux'




import {

  RouterProvider,
} from "react-router-dom";
// import customroute from "./Projectroute";
import customroute from "./Projectroute";
import { reduxStore } from "./Redux/reduxStore";
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
  <Provider store={reduxStore}>
    <RouterProvider router={customroute} />
  </Provider>,);
