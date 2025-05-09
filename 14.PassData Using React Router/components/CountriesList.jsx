import React, { useEffect, useState } from 'react'
import CountriesData from '../CountriesData';
import { CountryCard } from './CountryCard';
import { ShimmerSimpleGallery } from "react-shimmer-effects";

import styles from "./CountriesList.module.css"


export const CountriesList = ({countries, query}) => {

    // const {name, population, region, capital} = props.data

    // console.log(props);
    // console.log(name, population, region, capital);

    const [country, setCountry] = useState([]);
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
            setCountry(data);
        })
        console.log("Use Efect is rendered");

        return () => {
            console.log("Cle an");
        }
    }, []);

        

  return (
    <div className={styles.countriesList}>
        {
            country.length === 0 ? (
               <ShimmerSimpleGallery card imageHeight={300} caption />
             ) : (
                country.filter(function(data){
                    return data.name.common.toLowerCase().includes(query.toLowerCase());
                })
                .map((data, index) => {
                    return <CountryCard key={index} country = {data} />
                })
            )
        }
    </div>
  )
}



// 1. We can't use the varaibles - One state is created
//2. So times we need to make API only at the begining
//  In that case network calls will be unlimited , We use some conditions , but it wont work for every thing

// 3. UseEffect is Used , It takes a callBack function and a dependenciy array
// It i sused to monitor , it always runs at the begining.