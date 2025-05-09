import React, { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import CountriesData from "./CountriesData";
import { Outlet } from "react-router";

import {styles} from "./App.module.css"

const App = () => {

  const [isDark, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  

  return (
    <div>
      <Header theme = {[isDark,setDarkMode]} />
      <Outlet context={[isDark, setDarkMode]} />
    </div>
  );
};

export default App;
