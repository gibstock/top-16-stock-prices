import { useEffect } from 'react'
import type { NextPage } from 'next'
import { header, main } from '../components'
import { useDarkModeStore } from '../store/store'
import { useSymbolData } from '../hooks/useStockData'
import { flattenSymbolArray } from '../utils/flattenArray'

const Home: NextPage = () => {
  const dark = useDarkModeStore(state => state.dark)
  const { data, isInitialLoading} = useSymbolData()

  useEffect(() => {
    if(dark) {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [dark])

  
  if(isInitialLoading) return <h2>Data Loading...</h2>
  
  const listOfSymbols = flattenSymbolArray(data).sort()


  return (
    <div className=" w-full p-4 md:p-12 ">
        <header.Header />
        <main.MainStage listOfSymbols={listOfSymbols}/>
    </div>
  )
}

export default Home
