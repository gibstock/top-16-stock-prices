import React from 'react'
import { useStockData, useStockNameData } from '../../hooks/useStockData'
import { Card } from '../card'



const tickers = ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOGL', 'GOOG', 'BRK.B', 'UNH','JNJ', 'XOM', 'JPM', 'META', 'V', 'PG', 'NVDA', 'HD']

export const MainStage = () => {

  const queryResults: any | unknown = useStockData(tickers)
  const nameResults: any | unknown = useStockNameData(tickers)

  console.log(nameResults, 'name')

  return (
    <div className='grid grid-cols-4 mt-6 gap-3'>
      {
        queryResults.map((result: any, i: number) => {
          return <div className=' h-44 border rounded-xl p-4 bg-white shadow-[0px_1px_4px] shadow-shadow' key={i}>
            < Card tickers={tickers} result={result} index={i} name={nameResults[i]}/>
          </div>
        })
      }
    </div>
  )
}
