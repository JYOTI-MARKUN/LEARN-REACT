import React from 'react'
import NewCounter from './component/NewCounter'
import OldCounter from './component/ClickCounter'
import ClickCounter from './component/ClickCounter'
import HoverCounter from './component/HoverCounter'

export default function Home() {
  return (
<>
<h1>Welcome to our home page</h1>

<ClickCounter name="Click Component" />
<HoverCounter name="Hover Component"/>
</>
  )
}
