import React, { useState } from 'react'
import CountriesData from '../CountriesData';
import { CountryCard } from './CountryCard';

import styles from "./CountriesList.module.css"


export const CountriesList = ({countries, query}) => {

    // const {name, population, region, capital} = props.data

    // console.log(props);
    // console.log(name, population, region, capital);

    const [country, setCountry] = useState([]);

    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        setCountry(data);
    })

  return (
    <div className={styles.countriesList}>
        {
            country.filter(function(data){
                return data.name.common.toLowerCase().includes(query.toLowerCase());
            })
            .map((data, index) => {
                return <CountryCard key={index} country = {data} />
            })
        }
    </div>
  )
}
