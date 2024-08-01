import {React, useState} from 'react';
import "../app.css";
import Search from './search';
import Selectmenu from './selectmenu';
import Countriescontainer from './Countriescontainer';

export default function Home() {
    const [query,setquery] = useState('')
  return (
    <main>
    <div className="search-container">
          <Search setquery = {setquery}/>
          <Selectmenu />
      </div>
      <Countriescontainer query ={query}/>    
  
    </main>
  )
}
