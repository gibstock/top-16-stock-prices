import React, {useState, useEffect} from 'react'
import { useStockData, useStockNameData} from '../../hooks/useStockData'
import { useNewQuoteStore } from '../../store/store'
import { Card } from '../card'
import { Modal } from '../modal/modal'

type AppProps = {
  listOfSymbols: string[]
}

const tickers = ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOGL', 'GOOG', 'BRK.B', 'UNH','JNJ', 'XOM', 'JPM', 'META', 'V', 'PG', 'NVDA', 'HD']

export const MainStage = ({listOfSymbols}: AppProps) => {
  const [tickerSymbols, setTickerSymbols] = useState(tickers)
  const [launchModal, setLaunchModal] = useState(false)
  const [currentSymbol, setCurrentSymbol] = useState('')
  const [symbolsList, setSymbolsList] = useState([])

  const updatedSymbol = useNewQuoteStore(state => state.newQuote)

  const queryResults: any | unknown = useStockData(tickerSymbols)
  const nameResults: any | unknown = useStockNameData(tickerSymbols)
  // const {data: symbolsListResults, isInitialLoading: symbolLoading, isError, error} = useSymbolData()
  const { isInitialLoading: queryLoading} = queryResults
  const { isInitialLoading: nameLoading} = nameResults
  // let refs = useRef([...new Array(16)].map(() => React.createRef()))

  const handleClick = (e:any) => {
    const search = e.target.childNodes[0].data
    setCurrentSymbol(search)
    const index = tickerSymbols.findIndex(x => x === search)
    setLaunchModal(!launchModal)
  }

  // if(symbolLoading) return <h2>Data Loading...</h2>

  // const flattenSymbolArray = (data: any | unknown) => {
  //   let flattenedArray: string[] = []
  //   data?.data?.map((sym:any) => {
  //     flattenedArray.push(sym.symbol)
  //   })
  //   return flattenedArray
  // }
  // console.log("flat these results",flattenSymbolArray(symbolsListResults))

  if(queryLoading || nameLoading) return <h2>Data Loading...</h2>

  return (
    <div className='lg:grid lg:grid-cols-4 mt-6 gap-3 flex flex-col'>
      {
        queryResults.map((result: any, i: number) => {
          return ( 
            //@ts-ignore
            <div onClick={handleClick} className='h-44 rounded-xl p-4 bg-white dark:bg-dark-gray0 shadow-[0px_1px_4px] shadow-light-shadow dark:shadow-dark-shadow cursor-pointer' key={i}>
              <Card tickers={tickerSymbols} result={result} index={i} name={nameResults[i]}/>
            </div>
        )})
      }
      {launchModal && <Modal curr={currentSymbol} setCurrentSymbol={setCurrentSymbol} setTickerSymbols={setTickerSymbols} tickerSymbols={tickerSymbols} setLaunchModal={setLaunchModal} listOfSymbols={listOfSymbols}/>}
    </div>
  )
}
