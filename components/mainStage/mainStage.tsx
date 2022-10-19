import React from 'react'
import { useStockData, useStockNameData } from '../../hooks/useStockData'
import { Card } from '../card'



const tickers = ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOGL', 'GOOG', 'BRK.B', 'UNH','JNJ', 'XOM', 'JPM', 'META', 'V', 'PG', 'NVDA', 'HD']

export const MainStage = () => {

  const queryResults: any | unknown = useStockData(tickers)
  const nameResults: any | unknown = useStockNameData(tickers)

  return (
    <div className='lg:grid lg:grid-cols-4 mt-6 gap-3 flex flex-col'>
      {
        queryResults.map((result: any, i: number) => {
          return <div className=' h-44 rounded-xl p-4 bg-white dark:bg-dark-gray0 shadow-[0px_1px_4px] shadow-light-shadow dark:shadow-dark-shadow' key={i}>
            < Card tickers={tickers} result={result} index={i} name={nameResults[i]}/>
          </div>
        })
      }
    </div>
  )
}
