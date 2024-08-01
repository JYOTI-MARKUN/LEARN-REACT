import React from 'react'
import { Link } from 'react-router-dom'


export default function Countriescard({name,flag,population,region,capital}) {
  
  return (
    <Link className="country-content" to={`/${name}`}>
        <img src={flag} alt={name + `flag`} />
                                     <div className="country-data">
                                      <h4 className="title">{name}</h4>
                                      <p><b>Population: </b>{population}</p>
                                      <p><b>Resion: </b>{region}</p>
                                      <p><b>Capital: </b>{capital}</p>
    </div> </Link>
  )
}
