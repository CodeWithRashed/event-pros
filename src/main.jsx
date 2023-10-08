import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Route/Routes";
import DataContext from "./ContextApi/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContext>
    <RouterProvider router={Routes}></RouterProvider>
    </DataContext>
   
  </React.StrictMode>
);
