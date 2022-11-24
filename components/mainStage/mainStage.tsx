import React, {useState} from 'react'
import { Card } from '../card'
import { Modal } from '../modal'

type AppProps = {
  listOfSymbols: string[];
  tickerList: string[];
  setTickerList: (set: string[]) => void;
  queryResults: any | unknown;
  nameResults: any | unknown;
}


export const MainStage = ({listOfSymbols, tickerList, setTickerList, queryResults, nameResults}: AppProps) => {
  const [launchModal, setLaunchModal] = useState(false)
  const [currentSymbol, setCurrentSymbol] = useState('')

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
    <div className='lg:grid lg:grid-cols-4 mt-0 gap-3 flex flex-col'>
      {
        queryResults.map((result: any, i: number) => {
          return ( 
            //@ts-ignore
            <div className='h-44 rounded-xl p-4 bg-white dark:bg-dark-gray0 shadow-[0px_1px_4px] shadow-light-shadow dark:shadow-dark-shadow' key={i}>
              <Card handleClick={handleClick} tickers={tickerList} result={result} index={i} name={nameResults[i]}/>
            </div>
        )})
      }
      {launchModal && 
        <Modal 
          curr={currentSymbol} 
          tickerSymbols={tickerList} 
          setLaunchModal={setLaunchModal} 
          listOfSymbols={listOfSymbols}
          setTickerList={setTickerList}
        />
      }
    </div>
  )
}
