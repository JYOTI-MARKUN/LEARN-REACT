import React from 'react'
import "./CountriesListShimmer.css"

// const array = new Array(10).fill(1)
// console.log(array)
// array.map((el)=>console.log(el))  

// const mapped =  Array.from({length:15}).map((el,i)=>{  return <div key={i} className="country-card shimmer-card"></div>})
// console.log(mapped)
export default function CountriesListShimmer() {
  return (
    <div className='countries-container'>
    {
       Array.from({length:15}).map((el,i)=>{  return <div key={i} className="country-card shimmer-card"></div>})
    }
    </div>
  )
}
