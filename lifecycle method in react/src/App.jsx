import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import { Suspense } from 'react'

function App() {
  return (
    <>
<Header />
<main className='py-4 px-4 md:px-8'>
<Suspense fallback={<h1 className='text-xl '>Loading.........</h1>}>
<Outlet/>
</Suspense>
</main>
    </>
  )
}

export default App
