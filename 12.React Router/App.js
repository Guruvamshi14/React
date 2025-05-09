import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import CountriesData from "./CountriesData";
import { Outlet } from "react-router";

const App = () => {
  // console.log(CountriesData[0].name.common);
  // console.log(CountriesData[0]);
  // console.log(CountriesData[0].population);
  // console.log(CountriesData[0].region);
  // console.log(CountriesData[0].capital[0]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
