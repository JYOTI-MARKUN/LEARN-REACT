export default function Search({setquery}){
    return (   <div className="search-content">
        <span>
          <i className="fa-solid fa-magnifying-glass" />
          &nbsp;
        </span>
        <input 
         onChange={(e)=>setquery(e.target.value.toLowerCase())}  
         type="text" placeholder="Search for a Country.." />
      </div>  )
}