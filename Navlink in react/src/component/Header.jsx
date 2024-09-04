import React from "react";
import viteLogo from "/vite.svg";
import {   NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between hover:bg-pink-50 py-4 px-4 shadow-md md:px-8 pb-4 ">
      <img src={viteLogo} alt="" />
      <ul className="flex gap-4">
        <li>
          <NavLink className={({isActive})=>{   
            if(isActive)   return "underline text-blue-700"
          }} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>{   
            if(isActive)   return "underline text-blue-700"
          }} 
          to="/about">About</NavLink>
        </li>
        <li>
          <NavLink 
          // className={({isActive})=> isActive  && `underline text-blue-700` } 
          className={({isActive})=>{   
            if(isActive)   return "underline text-blue-700"
          }} 
             to="/contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  );
}
