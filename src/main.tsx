import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/Details";

const dataLoader = async () => {
  const loadedData = await fetch("data.json");
  return loadedData.json();
};
const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    loader: dataLoader,
  },
  {
    path: "countries/:countryIndex",
    element: <CountryDetails />,
    loader: dataLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
