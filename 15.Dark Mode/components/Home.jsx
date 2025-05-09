import { Main } from "./Main"
import React from 'react'
import CountriesData from "../CountriesData"

import { useOutletContext } from 'react-router';


export const Home = () => {

    const theme = useOutletContext();
    console.log(theme);

    return (
        <Main
        countries = {CountriesData}
        />
    )
}