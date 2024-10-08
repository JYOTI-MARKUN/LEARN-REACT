import React from 'react'

export default function Form() {
  return (
    <>   
    <div className='form-input'>
        <label htmlFor="name">Name:</label>        
        <input type="text" name='name' id='name' required placeholder='Enter your Name' />     
    </div>
    <div className='form-input'>
    <label htmlFor="email">Email:</label>        
    <input type="text" name='email' id='email' required placeholder='Enter your E-Mail' />
    </div>
    <button className='btn'>Submit</button>
    </>
  )
}


