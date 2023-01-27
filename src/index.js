import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import {appRouter} from "././App"
// import { BrowserRouter } from 'react-router-dom';
//  import ReactRouter from "./ReactRouter"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 <RouterProvider router={appRouter}/>
  </React.StrictMode>
);
