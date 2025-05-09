import React, { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import CountriesData from "./CountriesData";
import { Outlet } from "react-router";
import {styles} from "./App.module.css"

import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {

  const [isDark, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  
  console.log(ThemeContext);

  // const [isDark, setDarkMode] = useTheme();


  return (
    <ThemeContext.Provider value={[isDark,setDarkMode]}>
      <Header />
      <Outlet />
    </ThemeContext.Provider>
  );
};

// We can use the Usestate as Separate Funtion and 

/*

const ThemeContext = () => {

  const [isDark, setDark] .....

  return (
  
  <ThemeContext.Provider val = []>
  {childrn}
  </ ThemeContext.Provider >

  )

}


*/

export default App;
