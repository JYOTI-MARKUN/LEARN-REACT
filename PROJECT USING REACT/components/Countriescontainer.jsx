import React, { useEffect, useState } from 'react'
// import countriesData from '../data'
import Countriescard from './Countriescard'

export default function Countriescontainer({query}) { 
  const [countriesData,setcountriesData] = useState([]);

  // const [count,setcount] = useState(0);

  // if (countriesData.length === 0){
  // fetch("https://restcountries.com/v3.1/all")
  // .then((res)=>{
  //     return res.json()
  // }).then((data)=>{
  //     setcountriesData(data);   
  // })
  // }

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        setcountriesData(data);   
    })
    
    // const intervalId = setInterval(()=>{
    //   console.log("gvgvkhhk")
    // },[1000])

    // console.log(intervalId);

    // return(()=>{
    // clearInterval(intervalId);
    // })

  },[])
  
// useEffect(()=>{
//   console.log("hhhh")
// },[count,countriesData])



  return (
  <> 
  {/* <h1>{count}</h1> */}

  {/* <button onClick={()=>{setcount(count+1)}}>REmoce Countries</button> */}

   <div className="country-container">
  {
    countriesData.filter((country)=>country.name.common.toLowerCase().includes(query)).map((country)=>
      {     
      return (<Countriescard
       key={country.name.common} 
       name={country.name.common} 
       flag ={country.flags.svg}
       population ={country.population.toLocaleString("en-IN")} 
        region ={country.region}  
        capital={country.capital?.[0]}
       /> )
  })
  }
   </div> </> 
  )
}
