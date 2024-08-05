import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import './countryDetail.css'
import { Link, useParams } from "react-router-dom";

export default function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get("name");
  const params = useParams()
  const countryName = params.Country
  // console.log(params);

  console.log(countryName);
  const [countryData, setcountryData] = useState(null);
  const [error,seterror] = useState(false);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => {
        return res.json();
      })
      .then(([data]) => {
        console.log(data);
        setcountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          flag:data.flags.svg,
          capital:data.capital,
          topLevelDomain:data.tld,
          currencies:Object.values(data.currencies).map((currency)=>currency.name).join(","),
          languages:Object.values(data.languages).join(","),
          border_countries:['India']
        });
        console.log(Object.values(data.currencies).map((currency)=>currency.name).join(","))
      }).catch((err)=>{
        seterror(true);
      })
  }, [countryName]);

  if(error){
    return <div>Country not found</div>
  }
  return (
  
    countryData === null ?<Loading /> :    <main>
    <div className="main-container" onClick={()=>{history.back()}}>
      <a href="#" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i> &nbsp;Back
      </a>
      <div className="flag-content">
        <img src={countryData.flag} alt={`${countryData.name } flag`} />
        <div className="flag-text">
          <h2>{countryData.name}</h2>
          <div className="inner-text">
            <p>
              <b>Native Name: {countryData.nativeName};</b>
              <span className="native-name"></span>
            </p>
            <p>
              <b>
                Population: {countryData.population.toLocaleString('en-in')}
              </b>
              <span className="population"></span>
            </p>
            <p>
              <b>Resion: {countryData.region};</b>
              <span className="region"></span>
            </p>
            <p>
              <b>Sub Region:{countryData.subregion};</b>
              <span className="sub-region"></span>
            </p>
            <p>
              <b>Capital:{countryData.capital.join(" ")};</b>
              <span className="capital"></span>
            </p>
            <p>
              <b>Top Level Domain:{countryData.topLevelDomain};</b>
              <span className="top-level-domain"></span>
            </p>
            <p>
              <b>Currencies:{countryData.currencies};</b>
              <span className="Curriencies"></span>
            </p>
            <p>
              <b>Language:{countryData.languages};</b>
              <span className="languages-used"></span>
            </p>
          </div>
          <div className="border-countries">
            <b>Border Countries: &nbsp;&nbsp; </b>
            {
              countryData.border_countries.map((border)=><Link key={border} to = {`/${border}`}>{border}</Link>)
            }
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}
