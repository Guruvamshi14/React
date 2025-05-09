import React from 'react'

import style from "./CountryCard.module.css"

import { Link } from 'react-router'

export const CountryCard = ({country}) => {


    const {flags, population, region, capital} = country

    const image = flags.svg
    const name = country.name.common

  return (
    <Link  to = {`/${name}`}>
      <div className={style.Card}>
        <img src = {image} width="100px" />
        <div className={style.content}>
            <h3>{name}</h3>
            <p> Population: {population}</p>
            <p> Region: {region}</p>
              <p> Capital: {capital}</p>
          </div>
      </div>
    </Link>
    
  )
}
