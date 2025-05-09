import React from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import CountriesData from './CountriesData'

const App = () => {
    // console.log(CountriesData[0].name.common);
    // console.log(CountriesData[0]);
    // console.log(CountriesData[0].population);
    // console.log(CountriesData[0].region);
    // console.log(CountriesData[0].capital[0]);
  return (
    // <div>App</div>
    <>
    <Header />
    <Main

    // name = {CountriesData[0].name.common} 
    // population = {CountriesData[0].population}
    // region = {CountriesData[0].region}
    // capital = {CountriesData[0].capital[0]}
    countries = {CountriesData}
    />
    </>
  )
}

export default App