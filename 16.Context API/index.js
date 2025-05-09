import { createRoot } from "react-dom/client";
import React, { Component } from "react";
import { Home } from "./components/Home";
import App from "./App";
import { ErrorPage } from "./components/ErrorPage";
import { CountryDetails } from "./components/CountryDetails";
import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contact",
        element: <div> Hello </div>,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/:country",
        element: <CountryDetails />,
      },
    ],
  },
]);

// console.log(App);

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
