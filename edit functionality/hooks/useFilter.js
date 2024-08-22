import { useState } from "react"

// here we need to pass table as data and a callback to tell whixh basis we wanna filter our data
export function useFilter(dataList,callback) { 
    const [query,setQuery ] = useState("")


    const filteredData = dataList.filter((data)=>
         callback(data).toLowerCase().includes(query)
 )
    // in return we get filteredData and setquery
  return [filteredData,setQuery]
}
