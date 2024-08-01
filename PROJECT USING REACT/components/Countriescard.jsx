import React from 'react'

export default function Countriescard({name,flag,population,region,capital}) {
  // console.log(population)
  return (
    <a className="country-content" href={`/country.html?name=${name.common}`}>
        <img src={flag} alt={name + `flag`} />
                                     <div className="country-data">
                                      <h4 className="title">{name}</h4>
                                      <p><b>Population: </b>{population}</p>
                                      <p><b>Resion: </b>{region}</p>
                                      <p><b>Capital: </b>{capital}</p>
    </div></a>
  )
}
