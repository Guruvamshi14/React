import { Main } from "./Main"
import React from 'react'
import CountriesData from "../CountriesData"


export const Home = () => {
    return (
        <Main
        countries = {CountriesData}
        />
    )
}