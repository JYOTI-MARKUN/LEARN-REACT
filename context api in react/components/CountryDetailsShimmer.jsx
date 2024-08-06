import React from 'react'
import "./CountryDetailsShimmer.css"

export default function CountryDetailsShimmer(){
    return (
    <>
   <div className="country-details shimmer-card ">      </div>
   {/* <div className="details-text-container"> */}
    <h1 className='shimmer-heading'></h1>
   
        <p className='shimmer-para'><b></b><span className="native-name "></span></p>
        <p className='shimmer-para'><b></b><span className="population "></span></p>
        <p className='shimmer-para'><b></b><span className="region "></span></p>
        <p className='shimmer-para'><b></b><span className="sub-region "></span></p>
        <p className='shimmer-para'><b></b><span className="capital "></span></p>
        <p className='shimmer-para'><b></b><span className="top-level-domain "></span></p>
        <p className='shimmer-para'><b></b><span className="currencies "></span></p>
        <p className='shimmer-para'><b></b><span className="languages "></span></p>
    

    {/* </div>        */}
    </>

    )
}