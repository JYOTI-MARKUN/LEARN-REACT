import React from 'react'

export default function Selectoption({label,id,name,value,onChange,error,options,defaultOption}) {
  return (
  
    <div className="input-container">
    
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    >
      // checking wether user provided default value or not 
    {
      defaultOption &&   <option value="" hidden>
      {
      defaultOption
      }
      </option>
    }
   {
        options.map((option,value)=> <option key = {value} value={option}>{option}</option>
        )
   }

    </select>
    <p className="error-para">{error}</p>
  </div>
  )
}
