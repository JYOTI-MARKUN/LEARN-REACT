import {React} from 'react';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
import "./app.css"

export default function App (){
 
   return (
     <>
    <Header />
   <Outlet />
 
    </>)   
   
}