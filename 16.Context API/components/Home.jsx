import { Main } from "./Main"
import React from 'react'
import CountriesData from "../CountriesData"

import { useOutletContext } from 'react-router';


export const Home = () => {


    return (
        <Main
        countries = {CountriesData}
        />
    )
}