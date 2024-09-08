import React from 'react'
import NewCounter from './component/NewCounter'
import OldCounter from './component/OldCounter'

export default function Home() {
  return (
<>
<h1>Welcome to our home page</h1>
{/* <NewCounter name="New Component"/> */}
<OldCounter name="Old Component" />
</>
  )
}
