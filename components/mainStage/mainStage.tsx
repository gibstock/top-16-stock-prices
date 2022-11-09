import React, {useState, useEffect} from 'react'
import { useStockData, useStockNameData} from '../../hooks/useStockData'
import { useNewQuoteStore } from '../../store/store'
import { Card } from '../card'
// import { Modal } from '../modal/modal'
import { Modal } from '../modal'

type AppProps = {
  listOfSymbols: string[]
}

const tickers = ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOGL', 'GOOG', 'BRK.B', 'UNH','JNJ', 'XOM', 'JPM', 'META', 'V', 'PG', 'NVDA', 'HD']

export const MainStage = ({listOfSymbols}: AppProps) => {
  const [tickerSymbols, setTickerSymbols] = useState(tickers)
  const [launchModal, setLaunchModal] = useState(false)
  const [currentSymbol, setCurrentSymbol] = useState('')
  // const [symbolsList, setSymbolsList] = useState([])

  // const updatedSymbol = useNewQuoteStore(state => state.newQuote)

  const queryResults: any | unknown = useStockData(tickerSymbols)
  const nameResults: any | unknown = useStockNameData(tickerSymbols)
  // const {data: symbolsListResults, isInitialLoading: symbolLoading, isError, error} = useSymbolData()
  const { isInitialLoading: queryLoading} = queryResults
  const { isInitialLoading: nameLoading} = nameResults

  const handleClick = (e:any) => {
    if(typeof e.target.getAttribute('data-symbol') === 'string') {
      const search = e.target.childNodes[0].data
      setCurrentSymbol(search)
      setLaunchModal(!launchModal)
    }
  }
  if(queryLoading || nameLoading) return <h2>Data Loading...</h2>

  return (
    <div className='lg:grid lg:grid-cols-4 mt-6 gap-3 flex flex-col'>
      {
        queryResults.map((result: any, i: number) => {
          return ( 
            //@ts-ignore
            <div className='h-44 rounded-xl p-4 bg-white dark:bg-dark-gray0 shadow-[0px_1px_4px] shadow-light-shadow dark:shadow-dark-shadow' key={i}>
              <Card handleClick={handleClick} tickers={tickerSymbols} result={result} index={i} name={nameResults[i]}/>
            </div>
        )})
      }
      {launchModal && <Modal curr={currentSymbol} setCurrentSymbol={setCurrentSymbol} setTickerSymbols={setTickerSymbols} tickerSymbols={tickerSymbols} setLaunchModal={setLaunchModal} listOfSymbols={listOfSymbols}/>}
    </div>
  )
}
