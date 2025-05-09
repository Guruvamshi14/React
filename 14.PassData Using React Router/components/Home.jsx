import { Main } from "./Main"
import React from 'react'
import CountriesData from "../CountriesData"


export const Home = () => {
    return (
        <Main
        // name = {CountriesData[0].name.common} 
        // population = {CountriesData[0].population}
        // region = {CountriesData[0].region}
        // capital = {CountriesData[0].capital[0]}
        countries = {CountriesData}
        />
    )
}