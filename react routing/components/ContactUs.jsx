import React from 'react'
import { useParams } from 'react-router-dom'
// import Header from './header'

export default function Contact() {
  const params = useParams()
  console.log(params);
  return (
    <>
    {/* <Header /> */}

    <div>ContactUs</div>
    </>
  )
}
