import React, { useState } from 'react'
import Modal from './component/Modal'

export function Contact() {
  const [isopen, setIsOpen] = useState(false);
  return (
  <>
    <div>You can contact me on LinkedIn</div>
    <button onClick={()=>setIsOpen(true)}>Open Pop-up</button>
    <Modal
    isopen={isopen}
    setIsOpen={setIsOpen}
    header={<p className='text-red-500 text-xl font-bold'>hiii</p>}
    footer={<div className='flex justify-end'><button onClick={()=>setIsOpen(false)}>ok</button></div>}
    
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic, impedit aut quidem eaque assumenda dolorem officiis incidunt pariatur autem molestias, ea aliquid optio id sit eius, aspernatur consectetur natus.</p>
    </Modal>
  </>
  )
}
