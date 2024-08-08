
import {  useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'

import { useTheme } from '../hooks/useTheme'


export default function Home() {
  const [query, setQuery] = useState('')

  const [isDark] = useTheme();
  console.log(isDark)

  // const windowSize =  useWindowSize()

  return (
    <main className={`${isDark?"dark":""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      {/* <h1 style={{TextAlign:"center"}}>{windowSize.width} x {windowSize.height}</h1> */}
      {query === 'unmount' ? '' : <CountriesList query={query} />}
    </main>
  )
}
