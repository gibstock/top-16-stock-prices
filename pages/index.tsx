import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { header, main, footer } from '../components'
import { useDarkModeStore } from '../store/store'
import { useNewQuoteStore } from '../store/store'
import { useSymbolData, useStockData, useStockNameData } from '../hooks/useStockData'
import { flattenSymbolArray } from '../utils/flattenArray'
import { loadingSpinner } from '../components'

const tickers = ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOGL', 'GOOG', 'BRK.B', 'UNH','JNJ', 'XOM', 'JPM', 'META', 'V', 'PG', 'NVDA', 'HD']

const Home: NextPage = () => {
  const [ tickerList, setTickerList ] = useState(tickers)
  const dark = useDarkModeStore(state => state.dark)
  const userSymbolList = useNewQuoteStore(state => state.userSymbols)

  const queryResults: any | unknown = useStockData(tickerList)
  const nameResults: any | unknown = useStockNameData(tickerList)


  const { data, isInitialLoading} = useSymbolData()


  useEffect(() => {
    const darkCheck = () => {
      if(dark) {
        document.querySelector('html')?.classList.add('dark')
      } else {
        document.querySelector('html')?.classList.remove('dark')
      }
    }
    const userSymbolCheck = () => {
      if(userSymbolList.length > 0) {
        setTickerList(userSymbolList)
      }
    }
    darkCheck()
    userSymbolCheck()
  }, [dark, tickerList])

  
  if(isInitialLoading) return <loadingSpinner.LoadingSpinner loading={isInitialLoading} />
  
  const listOfSymbols = flattenSymbolArray(data).sort()


  return (
    <div className=" w-full p-4 md:px-12 ">
        <header.Header />
        <main.MainStage 
          listOfSymbols={listOfSymbols} 
          tickerList={tickerList} 
          queryResults={queryResults}
          nameResults={nameResults}
          setTickerList={setTickerList}
        />
        <footer.Footer />
    </div>
  )
}

export default Home
