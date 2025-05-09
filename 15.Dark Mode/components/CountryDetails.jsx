import React, { useEffect, useState } from "react";

import styles from "./CountryDetails.module.css";
import { useParams } from "react-router";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

import { Link } from "react-router";
import { useLocation } from "react-router";

import stylesMain from '../App.module.css'
import { useOutletContext } from "react-router";



export const CountryDetails = () => {
  const queryString = window.location.search;
  //   console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  //   const name = urlParams.get("name");

  const theme = useOutletContext();
  console.log(`In CountryDetailList ${theme}`);

  const [isDark, setDarkMode] = theme


  const { state } = useLocation()

  const param = useParams();


  const name = param.country;

  const [countryData, setCountryData] = useState(null);
  const [countryFound, setCountryNotFound] = useState(true);


  function updateCountryList(data) {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          flag: data.flags.svg,
          tld: data.tld,
          languages: Object.values(data.languages).join(", "),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          border: [],
        });
        
        if (data.borders === undefined) data.borders = [];

        const promises = data.borders.map((border) => {
          return fetch(
            `https://restcountries.com/v3.1/alpha/${border.toLowerCase()}`
          )
            .then((res) => res.json())
            .then((data) => {
              data = data[0];
              return data.name.common;
            })
            .catch((err) => console.log(err));
        });

        Promise.all(promises).then((borders) => {
          setCountryData((prev) => ({ ...prev, border: borders }));
        });
      }



  useEffect(() => {

    if (state) {
      updateCountryList(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((data) => data.json())
      .then((data) => {
        data = data[0];
        updateCountryList(data)
      })
      .catch((err) => {
        // console.log(err);
        setCountryNotFound(false);
      });
  }, [name]);

  if (countryFound === false) {
    return <div>Country Not Found</div>;
  }

  return countryData === null ? (
    <ShimmerSimpleGallery card imageHeight={300} caption />
  ) : (
    <>
      <div className={`${isDark ? stylesMain.dark : stylesMain.light} ${styles.countryDetailsPage}`}>
        <span
          className="back-button"
          onClick={() => {
            history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className={styles.countryDetails}>
          <img src={countryData.flag} />
          <div className={styles.countryDetailsContent}>
            <h2>{countryData.name}</h2>
            <div className={styles.details}>
              <p>Native Name : {countryData.nativeName}</p>
              <p>Region : {countryData.region}</p>
              <p>Sub region : {countryData.subregion}</p>
              <p>Capital : {countryData.capital}</p>
              <p>Top Level Domain : {countryData.tld}</p>
              <p>Currencies : {countryData.currencies}</p>
              <p>Languages : {countryData.languages}</p>
              <p>
                Border :{" "}
                {countryData.border.map((ele) => {
                  return (
                    <Link to={`/${ele}`} key={ele}>
                      {ele}
                    </Link>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

[
  {
    name: {
      common: "Republic of the Congo",
      official: "Republic of the Congo",
      nativeName: {
        fra: {
          official: "République du Congo",
          common: "République du Congo",
        },
        kon: {
          official: "Repubilika ya Kongo",
          common: "Repubilika ya Kongo",
        },
        lin: {
          official: "Republíki ya Kongó",
          common: "Republíki ya Kongó",
        },
      },
    },
    tld: [".cg"],
    cca2: "CG",
    ccn3: "178",
    cioc: "CGO",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      XAF: {
        symbol: "Fr",
        name: "Central African CFA franc",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["42"],
    },
    capital: ["Brazzaville"],
    altSpellings: ["CG", "Congo", "Congo-Brazzaville"],
    region: "Africa",
    subregion: "Middle Africa",
    languages: {
      fra: "French",
      kon: "Kikongo",
      lin: "Lingala",
    },
    latlng: [-1, 15],
    landlocked: false,
    borders: ["AGO", "CMR", "CAF", "COD", "GAB"],
    area: 342000,
    demonyms: {
      eng: {
        f: "Congolese",
        m: "Congolese",
      },
      fra: {
        f: "Congolaise",
        m: "Congolais",
      },
    },
    cca3: "COG",
    translations: {
      ara: {
        official: "جمهورية الكونغو",
        common: "جمهورية الكونفو",
      },
      bre: {
        official: "Republik Kongo",
        common: "Kongo-Brazzaville",
      },
      ces: {
        official: "Konžská republika",
        common: "Kongo",
      },
      cym: {
        official: "Gweriniaeth y Congo",
        common: "Gweriniaeth y Congo",
      },
      deu: {
        official: "Republik Kongo",
        common: "Kongo",
      },
      est: {
        official: "Kongo Vabariik",
        common: "Kongo Vabariik",
      },
      fin: {
        official: "Kongon tasavalta",
        common: "Kongo-Brazzaville",
      },
      fra: {
        official: "République du Congo",
        common: "Congo",
      },
      hrv: {
        official: "Republika Kongo",
        common: "Kongo",
      },
      hun: {
        official: "Kongói Köztársaság",
        common: "Kongói Köztársaság",
      },
      ind: {
        official: "Republik Kongo",
        common: "Kongo",
      },
      ita: {
        official: "Repubblica del Congo",
        common: "Congo",
      },
      jpn: {
        official: "コンゴ共和国",
        common: "コンゴ共和国",
      },
      kor: {
        official: "콩고",
        common: "콩고",
      },
      nld: {
        official: "Republiek Congo",
        common: "Congo",
      },
      per: {
        official: "جمهوری برازاویل کُنگو",
        common: "جمهوری کُنگو",
      },
      pol: {
        official: "Republika Konga",
        common: "Kongo",
      },
      por: {
        official: "República do Congo",
        common: "Congo",
      },
      rus: {
        official: "Республика Конго",
        common: "Республика Конго",
      },
      slk: {
        official: "Konžská republika",
        common: "Kongo",
      },
      spa: {
        official: "República del Congo",
        common: "Congo",
      },
      srp: {
        official: "Република Конго",
        common: "Конго",
      },
      swe: {
        official: "Republiken Kongo",
        common: "Kongo-Brazzaville",
      },
      tur: {
        official: "Kongo Cumhuriyeti",
        common: "Kongo Cumhuriyeti",
      },
      urd: {
        official: "جمہوریہ کانگو",
        common: "جمہوریہ کانگو",
      },
      zho: {
        official: "刚果共和国",
        common: "刚果",
      },
    },
    flag: "🇨🇬",
    maps: {
      googleMaps: "https://goo.gl/maps/Phf5dDDKdfCtuBTb6",
      openStreetMaps: "https://www.openstreetmap.org/relation/192794",
    },
    population: 5657000,
    gini: {
      2011: 48.9,
    },
    fifa: "CGO",
    car: {
      signs: ["RCB"],
      side: "right",
    },
    timezones: ["UTC+01:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/cg.png",
      svg: "https://flagcdn.com/cg.svg",
      alt: "The flag of the Republic of the Congo features a yellow diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. Above and beneath this band are a green and red triangle respectively.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/cd.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/cd.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [-4.25, 15.28],
    },
    postalCode: {
      format: null,
      regex: null,
    },
  },
];
