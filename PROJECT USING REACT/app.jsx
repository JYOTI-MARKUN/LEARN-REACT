import {React, useState} from 'react';
import Header from './components/header';
import "./app.css";
import Search from './components/search';
import Selectmenu from './components/selectmenu';
import Countriescontainer from './components/Countriescontainer';

export default function App (){
  const [query,setquery] = useState('')
   return ( <>
    <Header />
  <main>
  <div className="search-container">
        <Search setquery = {setquery}/>
        <Selectmenu />
    </div>
    <Countriescontainer query ={query}/>

    {/* {
      query === "unmount" ?"": <Countriescontainer query ={query}/>
    } */}


  </main>
    </>)   
   
}